import { useState, useEffect, useMemo } from "react";
import { useApp } from "./context/AppContext";
import { Layout } from "./components/Layout";
import { Login } from "./components/Login";
import { Header } from "./components/Header";
import { CategorySelector } from "./components/CategorySelector";
import { ModeSelector } from "./components/ModeSelector";
import { Flashcard } from "./components/Flashcard";
import { Test } from "./components/Test";
import { TestResults } from "./components/TestResults";
import { Dashboard } from "./components/Dashboard";
import { Leaderboard } from "./components/Leaderboard";
import { db } from "./firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { getQuestionsByCategory, DIFFICULTY } from "./data/questions";
import { motion, AnimatePresence } from "framer-motion";

// Soruları karıştırmak için yardımcı fonksiyon
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Soru seçeneklerini karıştırmak için yardımcı fonksiyon
const shuffleQuestion = (question) => {
  const options = [...question.options];
  const correctOption = options[question.correctOption];

  // Seçenekleri karıştır
  const shuffledOptions = shuffleArray(options);

  // Yeni doğru cevap indeksini bul
  const newCorrectOption = shuffledOptions.indexOf(correctOption);

  return {
    ...question,
    options: shuffledOptions,
    correctOption: newCorrectOption,
  };
};

function App() {
  const { user, loading, currentMode, currentCategory, setCurrentMode } =
    useApp();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [testResults, setTestResults] = useState(null);
  const [currentView, setCurrentView] = useState("main"); // "main" | "dashboard" | "leaderboard"
  const [isRandomMode, setIsRandomMode] = useState(false); // Rastgele mod için yeni state

  // Soruları zorluk seviyesine göre sırala
  const questions = useMemo(() => {
    // Önce kategori bazlı soruları al
    const categoryQuestions = getQuestionsByCategory(currentCategory);

    // Rastgele mod aktif değilse zorluk seviyesine göre sırala
    if (!isRandomMode || currentMode !== "flashcards") {
      return categoryQuestions.sort((a, b) => {
        // Zorluk seviyelerine sayısal değer ata
        const difficultyValues = {
          [DIFFICULTY.EASY]: 1,
          [DIFFICULTY.MEDIUM]: 2,
          [DIFFICULTY.HARD]: 3,
        };

        // Zorluk seviyelerine göre sırala
        return difficultyValues[a.difficulty] - difficultyValues[b.difficulty];
      });
    }

    // Rastgele mod aktifse karıştır
    return shuffleArray(categoryQuestions);
  }, [currentCategory, currentMode, isRandomMode]);

  useEffect(() => {
    setCurrentQuestionIndex(0);
  }, [currentCategory, questions.length]);

  const safeQuestionIndex = Math.min(
    Math.max(0, currentQuestionIndex),
    Math.max(0, questions.length - 1)
  );

  useEffect(() => {
    if (currentQuestionIndex !== safeQuestionIndex) {
      console.log(
        "Index düzeltiliyor:",
        currentQuestionIndex,
        "->",
        safeQuestionIndex
      );
      setCurrentQuestionIndex(safeQuestionIndex);
    }
  }, [currentQuestionIndex, safeQuestionIndex]);

  const handleTestComplete = async (results) => {
    setTestResults(results);
    if (user) {
      try {
        await addDoc(collection(db, "test_results"), {
          userId: user.uid,
          ...results,
          timestamp: new Date(),
        });
      } catch (error) {
        console.error("Error saving test results:", error);
      }
    }
  };

  const handleTestCancel = () => {
    setTestResults(null);
  };

  const handleNavigate = (view) => {
    setCurrentView(view);
  };

  const handleJumpToQuestion = (index) => {
    setCurrentQuestionIndex(index);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-800">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-slate-700"></div>
      </div>
    );
  }

  if (!user) {
    return <Login />;
  }

  const renderMainContent = () => {
    if (currentMode === "flashcards" && questions.length > 0) {
      return (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCategory}
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -20,
              scale: 0.98,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <Flashcard
              question={questions[currentQuestionIndex]}
              questions={questions}
              currentIndex={currentQuestionIndex}
              total={questions.length}
              onNext={() =>
                setCurrentQuestionIndex((prev) =>
                  Math.min(prev + 1, questions.length - 1)
                )
              }
              onPrev={() =>
                setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0))
              }
              onJumpTo={handleJumpToQuestion}
              isRandomMode={isRandomMode}
              onToggleRandomMode={() => setIsRandomMode((prev) => !prev)}
            />
          </motion.div>
        </AnimatePresence>
      );
    }

    if (currentMode === "test" && !testResults) {
      return (
        <Test
          questions={getQuestionsByCategory(currentCategory)}
          onComplete={handleTestComplete}
          onCancel={handleTestCancel}
        />
      );
    }

    if (currentMode === "test" && testResults) {
      return (
        <TestResults
          results={testResults}
          onStartNewTest={() => setTestResults(null)}
        />
      );
    }

    return null;
  };

  return (
    <Layout>
      <Header onNavigate={handleNavigate} />
      {currentView === "main" && (
        <>
          {currentMode !== "test" && <CategorySelector />}
          <ModeSelector />
          {renderMainContent()}
        </>
      )}
      {currentView === "dashboard" && <Dashboard />}
      {currentView === "leaderboard" && <Leaderboard />}
    </Layout>
  );
}

export default App;
