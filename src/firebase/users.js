import { db, COLLECTIONS } from "./config";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { CATEGORIES } from "../data/questions";

export const createOrUpdateUser = async (user) => {
  if (!user) return;

  const userRef = doc(db, COLLECTIONS.USERS, user.uid);
  const userData = {
    uid: user.uid,
    displayName: user.displayName,
    email: user.email,
    photoURL: user.photoURL,
    lastLogin: new Date(),
    progress: {
      [CATEGORIES.HTML]: { totalTests: 0, averageScore: 0 },
      [CATEGORIES.CSS]: { totalTests: 0, averageScore: 0 },
      [CATEGORIES.JAVASCRIPT]: { totalTests: 0, averageScore: 0 },
      [CATEGORIES.REACT]: { totalTests: 0, averageScore: 0 },
    },
    results: {},
  };

  try {
    await setDoc(userRef, userData, { merge: true });
  } catch (error) {
    console.error("Error updating user data:", error);
  }
};

export const getUserData = async (uid) => {
  if (!uid) return null;

  const userRef = doc(db, COLLECTIONS.USERS, uid);
  try {
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
    return null;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};

export const updateUserProgress = async (userId, category, testResult) => {
  if (!userId || !category || !testResult) return;

  const userRef = doc(db, COLLECTIONS.USERS, userId);
  try {
    const userDoc = await getDoc(userRef);
    if (!userDoc.exists()) return;

    const userData = userDoc.data();
    const currentProgress = userData.progress[category] || {
      totalTests: 0,
      averageScore: 0,
    };
    const newTotalTests = currentProgress.totalTests + 1;
    const newAverageScore =
      (currentProgress.averageScore * currentProgress.totalTests +
        (testResult.score / testResult.totalQuestions) * 100) /
      newTotalTests;

    // Progress güncelleme
    await updateDoc(userRef, {
      [`progress.${category}`]: {
        totalTests: newTotalTests,
        averageScore: newAverageScore,
      },
      // Test sonucunu kaydetme
      [`results.${category}.${testResult.timestamp.toISOString()}`]: {
        score: testResult.score,
        totalQuestions: testResult.totalQuestions,
        timeSpent: testResult.timeSpent,
        wrongAnswers: testResult.wrongAnswers,
      },
    });
  } catch (error) {
    console.error("Error updating user progress:", error);
  }
};
