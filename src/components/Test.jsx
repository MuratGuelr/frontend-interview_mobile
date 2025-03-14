import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiClock,
  FiPlay,
  FiCheckCircle,
  FiPause,
  FiX,
  FiAward,
  FiTarget,
} from "react-icons/fi";
import {
  CATEGORIES,
  CATEGORY_NAMES,
  getQuestionsByCategory,
  DIFFICULTY,
} from "../data/questions";
import { updateProgress } from "../firebase/progress";
import { useApp } from "../context/AppContext";
import { MdHtml, MdCss, MdJavascript } from "react-icons/md";
import { FaReact } from "react-icons/fa";

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

// Kategori stilleri
const CategoryStyles = {
  [CATEGORIES.HTML]: {
    gradient: "from-orange-600 to-orange-800",
    icon: MdHtml,
    ring: "ring-orange-500/30",
    text: "text-orange-50",
    lightBg: "bg-orange-50",
    darkBg: "dark:bg-orange-900/20",
    lightText: "text-orange-600",
    darkText: "dark:text-orange-400",
  },
  [CATEGORIES.CSS]: {
    gradient: "from-blue-600 to-blue-800",
    icon: MdCss,
    ring: "ring-blue-500/30",
    text: "text-blue-50",
    lightBg: "bg-blue-50",
    darkBg: "dark:bg-blue-900/20",
    lightText: "text-blue-600",
    darkText: "dark:text-blue-400",
  },
  [CATEGORIES.JAVASCRIPT]: {
    gradient: "from-yellow-600 to-yellow-800",
    icon: MdJavascript,
    ring: "ring-yellow-500/30",
    text: "text-yellow-50",
    lightBg: "bg-yellow-50",
    darkBg: "dark:bg-yellow-900/20",
    lightText: "text-yellow-600",
    darkText: "dark:text-yellow-400",
  },
  [CATEGORIES.REACT]: {
    gradient: "from-cyan-600 to-cyan-800",
    icon: FaReact,
    ring: "ring-cyan-500/30",
    text: "text-cyan-50",
    lightBg: "bg-cyan-50",
    darkBg: "dark:bg-cyan-900/20",
    lightText: "text-cyan-600",
    darkText: "dark:text-cyan-400",
  },
};

export const Test = ({ onComplete, onCancel }) => {
  const { user, currentCategory } = useApp();
  const [isStarted, setIsStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(currentCategory);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [showConfirmCancel, setShowConfirmCancel] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [minSwipeDistance] = useState(50);

  useEffect(() => {
    if (isStarted) {
      const shuffled = shuffleArray(getQuestionsByCategory(selectedCategory))
        .slice(0, 10) // 10 soru al
        .map(shuffleQuestion); // Her sorunun seçeneklerini karıştır
      setShuffledQuestions(shuffled);
    }
  }, [isStarted, selectedCategory]);

  useEffect(() => {
    let timer;
    if (isStarted && !isComplete && !isPaused) {
      timer = setInterval(() => {
        setTimeSpent((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isStarted, isComplete, isPaused]);

  const handleAnswerSelect = (index) => {
    if (!isPaused) {
      setSelectedAnswer(index);
    }
  };

  const handleNext = async () => {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctOption;

    if (!isCorrect) {
      setWrongAnswers([
        ...wrongAnswers,
        {
          questionIndex: currentQuestionIndex,
          question: currentQuestion.question,
          userAnswer: currentQuestion.options[selectedAnswer],
          correctAnswer: currentQuestion.options[currentQuestion.correctOption],
          difficulty: currentQuestion.difficulty,
        },
      ]);
    }

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestionIndex === shuffledQuestions.length - 1) {
      if (isSubmitting) return; // Eğer zaten gönderiliyor ise işlemi durdur
      setIsSubmitting(true); // Gönderim başladığını işaretle

      setIsComplete(true);
      const timestamp = new Date();
      const finalScore = score + (isCorrect ? 1 : 0);

      // Son yanlış cevabı da ekleyelim
      const finalWrongAnswers = isCorrect
        ? wrongAnswers
        : [
            ...wrongAnswers,
            {
              questionIndex: currentQuestionIndex,
              question: currentQuestion.question,
              userAnswer: currentQuestion.options[selectedAnswer],
              correctAnswer:
                currentQuestion.options[currentQuestion.correctOption],
            },
          ];

      const results = {
        score: finalScore,
        timeSpent,
        wrongAnswers: finalWrongAnswers,
        totalQuestions: shuffledQuestions.length,
        category: selectedCategory,
        timestamp,
        qualifiesForLeaderboard: finalScore >= 8,
      };

      if (user && selectedCategory !== CATEGORIES.ALL) {
        try {
          await updateProgress(user.uid, selectedCategory, results);
        } catch (error) {
          console.error("Error updating user progress:", error);
        }
      }

      onComplete(results);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    }
  };

  const handleCancelTest = () => {
    if (showConfirmCancel) {
      setShowConfirmCancel(false);
      setIsStarted(false);
      setCurrentQuestionIndex(0);
      setSelectedAnswer(null);
      setScore(0);
      setTimeSpent(0);
      setWrongAnswers([]);
      setShuffledQuestions([]);
      setIsPaused(false);
      onCancel();
    } else {
      setShowConfirmCancel(true);
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  // Soru kartı için dokunmatik etkileşimler
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setTouchStart({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchMove = (e) => {
    if (!touchStart) return;
    const touch = e.touches[0];
    setTouchEnd({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distanceX = touchStart.x - touchEnd.x;
    const distanceY = touchStart.y - touchEnd.y;
    const isSignificantMoveX = Math.abs(distanceX) > minSwipeDistance;
    const isSignificantMoveY = Math.abs(distanceY) > minSwipeDistance;

    if (isSignificantMoveX && Math.abs(distanceX) > Math.abs(distanceY)) {
      // Yatay kaydırma - cevap seçimi için kullanılabilir
      const direction = distanceX > 0 ? 1 : -1;
      const newIndex = selectedAnswer === null ? 0 : selectedAnswer + direction;
      if (
        newIndex >= 0 &&
        newIndex < shuffledQuestions[currentQuestionIndex].options.length
      ) {
        handleAnswerSelect(newIndex);
      }
    }
  };

  if (!isStarted) {
    const categoryQuestions = getQuestionsByCategory(selectedCategory);
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Test Moduna Hoş Geldiniz
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Bilgilerinizi test etmek için bir kategori seçin. Her test 10
            sorudan oluşur ve süre tutulur.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {Object.entries(CATEGORY_NAMES).map(([key, name]) => {
            if (key === CATEGORIES.ALL) return null; // Tüm Konular seçeneğini gösterme
            const questionCount = getQuestionsByCategory(key).length;
            const difficultyDistribution = getQuestionsByCategory(key).reduce(
              (acc, q) => {
                acc[q.difficulty]++;
                return acc;
              },
              { easy: 0, medium: 0, hard: 0 }
            );

            return (
              <motion.button
                key={key}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedCategory(key)}
                className={`relative overflow-hidden p-6 rounded-2xl text-left transition-all ${
                  selectedCategory === key
                    ? `bg-gradient-to-br ${
                        key === CATEGORIES.HTML
                          ? "from-orange-700 to-orange-900"
                          : key === CATEGORIES.CSS
                          ? "from-blue-700 to-blue-900"
                          : key === CATEGORIES.JAVASCRIPT
                          ? "from-yellow-700 to-yellow-900"
                          : "from-cyan-700 to-cyan-900"
                      } text-white shadow-lg`
                    : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        {name}
                      </h3>
                      <p className="text-sm text-white/80">
                        Toplam {questionCount} soru
                      </p>
                    </div>
                    <span
                      className={`p-3 rounded-xl ${
                        selectedCategory === key
                          ? "bg-white/10"
                          : "bg-gray-100 dark:bg-gray-700"
                      }`}
                    >
                      {React.createElement(CategoryStyles[key].icon, {
                        className: `text-4xl ${
                          selectedCategory === key
                            ? "text-white"
                            : key === CATEGORIES.HTML
                            ? "text-orange-500"
                            : key === CATEGORIES.CSS
                            ? "text-blue-500"
                            : key === CATEGORIES.JAVASCRIPT
                            ? "text-yellow-500"
                            : "text-cyan-500"
                        } ${CategoryStyles[key].className || ""}`,
                      })}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div
                      className={`p-2 rounded-lg text-center ${
                        selectedCategory === key
                          ? "bg-white/10"
                          : "bg-green-50 dark:bg-green-500/10"
                      }`}
                    >
                      <div
                        className={`text-sm font-medium ${
                          selectedCategory === key
                            ? "text-white"
                            : "text-green-600 dark:text-green-400"
                        }`}
                      >
                        Kolay
                      </div>
                      <div
                        className={`text-lg font-semibold ${
                          selectedCategory === key
                            ? "text-white"
                            : "text-green-700 dark:text-green-300"
                        }`}
                      >
                        {difficultyDistribution.easy}
                      </div>
                    </div>
                    <div
                      className={`p-2 rounded-lg text-center ${
                        selectedCategory === key
                          ? "bg-white/10"
                          : "bg-orange-50 dark:bg-orange-500/10"
                      }`}
                    >
                      <div
                        className={`text-sm font-medium ${
                          selectedCategory === key
                            ? "text-white"
                            : "text-orange-600 dark:text-orange-400"
                        }`}
                      >
                        Orta
                      </div>
                      <div
                        className={`text-lg font-semibold ${
                          selectedCategory === key
                            ? "text-white"
                            : "text-orange-700 dark:text-orange-300"
                        }`}
                      >
                        {difficultyDistribution.medium}
                      </div>
                    </div>
                    <div
                      className={`p-2 rounded-lg text-center ${
                        selectedCategory === key
                          ? "bg-white/10"
                          : "bg-red-50 dark:bg-red-500/10"
                      }`}
                    >
                      <div
                        className={`text-sm font-medium ${
                          selectedCategory === key
                            ? "text-white"
                            : "text-red-600 dark:text-red-400"
                        }`}
                      >
                        Zor
                      </div>
                      <div
                        className={`text-lg font-semibold ${
                          selectedCategory === key
                            ? "text-white"
                            : "text-red-700 dark:text-red-300"
                        }`}
                      >
                        {difficultyDistribution.hard}
                      </div>
                    </div>
                  </div>

                  {selectedCategory === key && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-sm text-white/90"
                    >
                      <FiPlay className="text-lg" />
                      <span>Başlamak için tıklayın</span>
                    </motion.div>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>

        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsStarted(true)}
              className="inline-flex items-center gap-3 px-8 py-4 bg-green-700 hover:bg-green-700 text-white rounded-xl font-medium text-lg transition-colors shadow-lg shadow-green-500/30"
            >
              <FiPlay className="text-xl" />
              <span>Testi Başlat</span>
            </motion.button>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              10 soru • Süre tutulacak • Sonuçlar kaydedilecek
            </p>
          </motion.div>
        )}
      </motion.div>
    );
  }

  if (!shuffledQuestions.length) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200 dark:border-gray-700 border-t-slate-500 dark:border-t-slate-400"></div>
      </div>
    );
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-0">
      {/* Üst Bilgi Çubuğu */}
      <div
        className={`mb-8 p-6 rounded-2xl bg-gradient-to-br ${CategoryStyles[selectedCategory].gradient} ${CategoryStyles[selectedCategory].shadow} shadow-lg`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {React.createElement(CategoryStyles[selectedCategory].icon, {
              className: `text-4xl ${CategoryStyles[selectedCategory].text}`,
            })}
            <div>
              <h2 className="text-2xl font-bold text-white">
                {CATEGORY_NAMES[selectedCategory]}
              </h2>
              <div className="flex items-center gap-3 text-white/80 mt-1">
                <span className="flex items-center gap-1">
                  <FiTarget className="text-lg" />
                  Soru {currentQuestionIndex + 1}/{shuffledQuestions.length}
                </span>
                <span className="flex items-center gap-1">
                  <FiClock className="text-lg" />
                  {formatTime(timeSpent)}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPaused(!isPaused)}
              className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
            >
              {isPaused ? (
                <FiPlay className="text-xl text-white" />
              ) : (
                <FiPause className="text-xl text-white" />
              )}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCancelTest}
              className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
            >
              <FiX className="text-xl text-white" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Soru Kartı */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden ${
          isPaused ? "opacity-50 pointer-events-none" : ""
        }`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Zorluk Seviyesi Göstergesi */}
        <div
          className={`p-3 text-center ${
            currentQuestion.difficulty === DIFFICULTY.EASY
              ? "bg-green-50 dark:bg-green-900/20"
              : currentQuestion.difficulty === DIFFICULTY.MEDIUM
              ? "bg-orange-50 dark:bg-orange-900/20"
              : "bg-red-50 dark:bg-red-900/20"
          }`}
        >
          <span
            className={`text-sm font-medium ${
              currentQuestion.difficulty === DIFFICULTY.EASY
                ? "text-green-600 dark:text-green-400"
                : currentQuestion.difficulty === DIFFICULTY.MEDIUM
                ? "text-orange-600 dark:text-orange-400"
                : "text-red-600 dark:text-red-400"
            }`}
          >
            {currentQuestion.difficulty === DIFFICULTY.EASY
              ? "Kolay Seviye"
              : currentQuestion.difficulty === DIFFICULTY.MEDIUM
              ? "Orta Seviye"
              : "Zor Seviye"}
          </span>
        </div>

        {/* Soru ve Cevaplar */}
        <div className="p-4 sm:p-6">
          <p className="text-lg sm:text-xl text-gray-800 dark:text-white mb-6 leading-relaxed">
            {currentQuestion.question}
          </p>

          <div className="space-y-3 sm:space-y-4">
            {currentQuestion.options.map((option, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                onClick={() => !isSubmitting && handleAnswerSelect(index)}
                className={`w-full text-left p-3 sm:p-4 rounded-xl transition-all duration-200 ${
                  selectedAnswer === index
                    ? `bg-gradient-to-br ${CategoryStyles[selectedCategory].gradient} text-white shadow-lg ${CategoryStyles[selectedCategory].shadow}`
                    : "bg-gray-50 dark:bg-gray-700/50 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
                } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-white/20 text-sm">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span>{option}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Alt Butonlar */}
      <div className="flex justify-end mt-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNext}
          disabled={selectedAnswer === null || isPaused || isSubmitting}
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 ${
            selectedAnswer !== null
              ? `bg-gradient-to-br ${CategoryStyles[selectedCategory].gradient} text-white shadow-lg ${CategoryStyles[selectedCategory].shadow}`
              : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
          }`}
        >
          {currentQuestionIndex === shuffledQuestions.length - 1 ? (
            <>
              <FiCheckCircle />
              <span>
                {isSubmitting ? "Test Tamamlanıyor..." : "Testi Bitir"}
              </span>
            </>
          ) : (
            <span>Sonraki Soru</span>
          )}
        </motion.button>
      </div>

      {/* Duraklama Modalı */}
      {isPaused && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50"
        >
          {/* Bulanık Arka Plan */}
          <motion.div
            initial={{
              backdropFilter: "blur(0px)",
              backgroundColor: "rgba(17, 24, 39, 0)",
            }}
            animate={{
              backdropFilter: "blur(8px)",
              backgroundColor: "rgba(17, 24, 39, 0.6)",
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute inset-0"
          />

          {/* Modal İçeriği */}
          <div className="relative h-full flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full mx-4 shadow-xl"
            >
              <div className="text-center space-y-6">
                <div
                  className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${CategoryStyles[selectedCategory].lightBg} ${CategoryStyles[selectedCategory].darkBg}`}
                >
                  <FiPause
                    className={`text-3xl ${CategoryStyles[selectedCategory].lightText} ${CategoryStyles[selectedCategory].darkText}`}
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    Test Duraklatıldı
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Teste devam etmek için aşağıdaki butona tıklayın
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsPaused(false)}
                  className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white bg-gradient-to-br ${CategoryStyles[selectedCategory].gradient} ${CategoryStyles[selectedCategory].shadow} shadow-lg w-full`}
                >
                  <FiPlay className="text-xl" />
                  <span className="font-medium">Devam Et</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Çıkış Onay Modalı */}
      {showConfirmCancel && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50"
        >
          {/* Bulanık Arka Plan */}
          <motion.div
            initial={{
              backdropFilter: "blur(0px)",
              backgroundColor: "rgba(17, 24, 39, 0)",
            }}
            animate={{
              backdropFilter: "blur(8px)",
              backgroundColor: "rgba(17, 24, 39, 0.6)",
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute inset-0"
          />

          {/* Modal İçeriği */}
          <div className="relative h-full flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full mx-4 shadow-xl"
            >
              <div className="text-center space-y-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center">
                  <FiX className="text-3xl text-red-500 dark:text-red-400" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    Testten Çıkmak İstediğinize Emin Misiniz?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Test ilerlemeniz kaydedilmeyecek ve başa döneceksiniz
                  </p>
                </div>

                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowConfirmCancel(false)}
                    className="flex-1 px-6 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    Vazgeç
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setShowConfirmCancel(false);
                      setIsStarted(false);
                      setCurrentQuestionIndex(0);
                      setSelectedAnswer(null);
                      setScore(0);
                      setTimeSpent(0);
                      setWrongAnswers([]);
                      setShuffledQuestions([]);
                      setIsPaused(false);
                      onCancel();
                    }}
                    className="flex-1 px-6 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white font-medium transition-colors shadow-lg shadow-red-500/25"
                  >
                    Testi Bitir
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};
