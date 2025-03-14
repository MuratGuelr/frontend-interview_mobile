import { db, COLLECTIONS } from "./config";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { CATEGORIES } from "../data/questions";

// Kullanıcının ilerleme durumunu al
export const getUserProgress = async (userId) => {
  try {
    const userDoc = await getDoc(doc(db, "users", userId));
    if (userDoc.exists()) {
      return userDoc.data().progress || {};
    }
    return {};
  } catch (error) {
    console.error("İlerleme durumu alınamadı:", error);
    return {};
  }
};

// Test sonucuna göre ilerleme durumunu güncelle
export const updateProgress = async (userId, category, results) => {
  try {
    const userRef = doc(db, COLLECTIONS.USERS, userId);
    const userDoc = await getDoc(userRef);
    const currentScore = (results.score / results.totalQuestions) * 100;

    if (!userDoc.exists()) {
      // Yeni kullanıcı için ilk kayıt
      const initialProgress = {
        [category]: {
          totalTests: 1,
          averageScore: currentScore,
          bestScore: currentScore,
          totalTime: results.timeSpent || 0,
          results: [
            {
              ...results,
              timestamp: results.timestamp,
              wrongAnswers: results.wrongAnswers || [],
            },
          ],
        },
      };

      await setDoc(
        userRef,
        {
          progress: initialProgress,
        },
        { merge: true }
      );
    } else {
      const userData = userDoc.data();
      const categoryProgress = userData.progress?.[category] || {
        totalTests: 0,
        averageScore: 0,
        bestScore: 0,
        totalTime: 0,
        results: [],
      };

      // Yeni ortalama skoru hesapla
      const totalScore =
        categoryProgress.averageScore * categoryProgress.totalTests +
        currentScore;
      const newTotalTests = categoryProgress.totalTests + 1;
      const newAverageScore = totalScore / newTotalTests;

      // En iyi skoru güncelle
      const newBestScore = Math.max(
        categoryProgress.bestScore || 0,
        currentScore
      );

      // Yeni sonucu ekle
      const updatedResults = [
        ...(categoryProgress.results || []),
        {
          ...results,
          timestamp: results.timestamp,
          wrongAnswers: results.wrongAnswers || [],
        },
      ];

      // Progress'i güncelle
      const updatedProgress = {
        ...userData.progress,
        [category]: {
          totalTests: newTotalTests,
          averageScore: newAverageScore,
          bestScore: newBestScore,
          totalTime:
            (categoryProgress.totalTime || 0) + (results.timeSpent || 0),
          results: updatedResults,
        },
      };

      // Firestore'u güncelle
      await updateDoc(userRef, {
        progress: updatedProgress,
      });
    }
  } catch (error) {
    console.error("Error updating progress:", error);
    throw error;
  }
};
