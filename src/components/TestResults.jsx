import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiClock, FiAward, FiX, FiRepeat, FiTrendingUp } from "react-icons/fi";
import { CATEGORIES, CATEGORY_NAMES } from "../data/questions";
import { db } from "../firebase/config";
import {
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore";
import { getUserData } from "../firebase/users";
import { MdHtml, MdCss, MdJavascript } from "react-icons/md";
import { FaReact } from "react-icons/fa";

const categoryStyles = {
  [CATEGORIES.HTML]: {
    icon: MdHtml,
    gradient:
      "from-orange-500/20 to-red-500/20 dark:from-orange-900/30 dark:to-red-900/30",
    iconColor: "text-orange-600 dark:text-orange-400",
    border: "border-orange-500",
  },
  [CATEGORIES.CSS]: {
    icon: MdCss,
    gradient:
      "from-blue-500/20 to-indigo-500/20 dark:from-blue-900/30 dark:to-indigo-900/30",
    iconColor: "text-blue-600 dark:text-blue-400",
    border: "border-blue-500",
  },
  [CATEGORIES.JAVASCRIPT]: {
    icon: MdJavascript,
    gradient:
      "from-yellow-500/20 to-amber-500/20 dark:from-yellow-900/30 dark:to-amber-900/30",
    iconColor: "text-yellow-600 dark:text-yellow-400",
    border: "border-yellow-500",
  },
  [CATEGORIES.REACT]: {
    icon: FaReact,
    gradient:
      "from-cyan-500/20 to-blue-500/20 dark:from-cyan-900/30 dark:to-blue-900/30",
    iconColor: "text-cyan-600 dark:text-cyan-400",
    border: "border-cyan-500",
  },
  [CATEGORIES.ALL]: {
    icon: FiAward,
    gradient:
      "from-gray-500/20 to-slate-500/20 dark:from-gray-900/30 dark:to-slate-900/30",
    iconColor: "text-gray-600 dark:text-gray-400",
    border: "border-gray-500",
  },
};

export const TestResults = ({ results, onStartNewTest }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [leaderboard, setLeaderboard] = useState([]);
  const [isLoadingLeaderboard, setIsLoadingLeaderboard] = useState(true);
  const { score, timeSpent, totalQuestions, category } = results;
  const percentage = Math.round((score / totalQuestions) * 100);

  // Liderlik tablosuna girebilme kontrolü
  const qualifiesForLeaderboard = score >= 8;

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const q = query(
          collection(db, "test_results"),
          where("category", "==", category),
          where("score", ">=", 8),
          orderBy("score", "desc"),
          orderBy("timeSpent", "asc"),
          limit(5)
        );
        const querySnapshot = await getDocs(q);
        const leaderboardData = await Promise.all(
          querySnapshot.docs.map(async (doc) => {
            const data = doc.data();
            const userData = await getUserData(data.userId);
            return {
              id: doc.id,
              ...data,
              user: userData,
            };
          })
        );
        setLeaderboard(leaderboardData);
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      } finally {
        setIsLoadingLeaderboard(false);
      }
    };

    fetchLeaderboard();
  }, [category]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto px-3 sm:px-0"
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
        {/* Header Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-600/20 backdrop-blur-sm" />
          <div className="relative p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 text-gray-800 dark:text-white">
              Test Sonuçları
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
              {CATEGORY_NAMES[category] || "Tüm Konular"} kategorisinde test
              tamamlandı
            </p>

            {/* Score Circle */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div
                className={`w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center border-8 ${
                  percentage >= 80
                    ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                    : percentage >= 60
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                    : percentage >= 40
                    ? "border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20"
                    : "border-red-500 bg-red-50 dark:bg-red-900/20"
                }`}
              >
                <div className="text-center">
                  <div
                    className={`text-2xl sm:text-3xl font-bold ${
                      percentage >= 80
                        ? "text-green-600 dark:text-green-400"
                        : percentage >= 60
                        ? "text-blue-600 dark:text-blue-400"
                        : percentage >= 40
                        ? "text-yellow-600 dark:text-yellow-400"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {percentage}%
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    Başarı
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-3 sm:p-6 rounded-xl backdrop-blur-sm">
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  <FiAward className="text-xl sm:text-2xl text-green-500" />
                  <div>
                    <div className="text-lg sm:text-2xl font-bold text-gray-800 dark:text-white">
                      {score}/{totalQuestions}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                      Doğru Cevap
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700/50 p-3 sm:p-6 rounded-xl backdrop-blur-sm">
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  <FiClock className="text-xl sm:text-2xl text-blue-500" />
                  <div>
                    <div className="text-lg sm:text-2xl font-bold text-gray-800 dark:text-white">
                      {formatTime(timeSpent)}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                      Süre
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700/50 p-3 sm:p-6 rounded-xl backdrop-blur-sm">
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  <FiX className="text-xl sm:text-2xl text-red-500" />
                  <div>
                    <div className="text-lg sm:text-2xl font-bold text-gray-800 dark:text-white">
                      {totalQuestions - score}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                      Yanlış Cevap
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Liderlik Tablosu - Sadece yeterli skoru varsa göster */}
        {qualifiesForLeaderboard && (
          <div className="p-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
              <FiTrendingUp className="text-slate-500" />
              <span>Liderlik Tablosu</span>
            </h3>

            {isLoadingLeaderboard ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-slate-200 dark:border-slate-700 border-t-slate-800 dark:border-t-slate-300"></div>
              </div>
            ) : leaderboard.length > 0 ? (
              <div className="space-y-4">
                {leaderboard.slice(0, 3).map((entry, index) => (
                  <motion.div
                    key={entry.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-6 rounded-xl shadow-lg transition-all duration-200 ${
                      index === 0
                        ? "bg-gradient-to-r from-yellow-500/10 via-amber-500/10 to-orange-500/10 dark:from-yellow-500/20 dark:via-amber-500/20 dark:to-orange-500/20 border-l-4 border-yellow-500"
                        : index === 1
                        ? "bg-gradient-to-r from-slate-500/10 via-gray-500/10 to-slate-400/10 dark:from-slate-500/20 dark:via-gray-500/20 dark:to-slate-500/20 border-l-4 border-slate-500"
                        : "bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-yellow-500/10 dark:from-orange-500/20 dark:via-amber-500/20 dark:to-yellow-500/20 border-l-4 border-orange-500"
                    }`}
                  >
                    <div className="flex items-center gap-6">
                      {/* Position Badge */}
                      <div className="flex-shrink-0 w-16 h-16 relative">
                        <div
                          className={`absolute inset-0 rounded-full ${
                            index === 0
                              ? "bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-500"
                              : index === 1
                              ? "bg-gradient-to-br from-slate-400 via-gray-500 to-slate-600"
                              : "bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-500"
                          } shadow-lg`}
                        >
                          <div className="absolute inset-0.5 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                            {entry.user?.photoURL ? (
                              <img
                                src={entry.user.photoURL}
                                alt={entry.user.displayName}
                                className="w-full h-full rounded-full object-cover"
                              />
                            ) : (
                              <span className="text-2xl font-bold">
                                {index + 1}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* User Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-lg font-semibold text-gray-800 dark:text-white">
                            {entry.user?.displayName || "Anonim Kullanıcı"}
                          </span>
                          <div
                            className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${
                              categoryStyles[entry.category].gradient
                            } border border-${
                              categoryStyles[entry.category].border
                            } flex items-center gap-2`}
                          >
                            <span
                              className={`text-sm font-medium ${
                                categoryStyles[entry.category].iconColor
                              }`}
                            >
                              {CATEGORY_NAMES[entry.category]}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="flex items-center gap-2">
                            <div className="p-2 rounded-lg bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30">
                              <FiAward className="text-green-600 dark:text-green-400" />
                            </div>
                            <span className="text-sm font-medium text-green-600 dark:text-green-400">
                              {(
                                (entry.score / entry.totalQuestions) *
                                100
                              ).toFixed(1)}
                              %
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="p-2 rounded-lg bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30">
                              <FiClock className="text-blue-600 dark:text-blue-400" />
                            </div>
                            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                              {formatTime(entry.timeSpent)}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Date */}
                      <div className="text-right">
                        <div className="px-3 py-1 rounded-lg bg-gradient-to-r from-gray-100 to-slate-100 dark:from-gray-800 dark:to-slate-800 text-sm text-gray-600 dark:text-gray-400">
                          {new Date(
                            entry.timestamp?.toDate()
                          ).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : null}
          </div>
        )}

        {/* Bilgilendirme Mesajı */}
        <div className="px-8 py-4 bg-gray-50 dark:bg-gray-700/50 text-center">
          {!qualifiesForLeaderboard ? (
            <div className="space-y-2">
              <p className="text-yellow-600 dark:text-yellow-400 font-medium">
                Liderlik tablosuna girebilmek için en az 8 doğru cevap
                gerekiyor.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Şu anki skorunuz: {score} doğru
              </p>
            </div>
          ) : leaderboard.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-400">
              Bu kategoride henüz liderlik tablosu oluşturulmamış. İlk siz
              olabilirsiniz!
            </p>
          ) : (
            <p className="text-gray-600 dark:text-gray-400">
              Tebrikler! Skorunuz liderlik tablosuna girebilecek kadar yüksek.
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="p-8 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-200 dark:border-gray-700">
          {!showConfirm ? (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowConfirm(true)}
              className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl transition-all duration-200 shadow-lg ${
                qualifiesForLeaderboard
                  ? "bg-gradient-to-r from-green-700 to-green-600 text-white hover:from-green-500 hover:to-green-600"
                  : "bg-gradient-to-r from-yellow-700 to-yellow-600 text-white hover:from-yellow-500 hover:to-yellow-600"
              }`}
            >
              <FiRepeat className="text-xl" />
              <span className="font-medium">
                {qualifiesForLeaderboard ? "Yeni Test Başlat" : "Tekrar Dene"}
              </span>
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <p className="text-center text-gray-600 dark:text-gray-400 mb-4">
                {qualifiesForLeaderboard
                  ? "Yeni bir test başlatmak istediğinize emin misiniz?"
                  : "Testi tekrar denemek istediğinize emin misiniz?"}
              </p>
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onStartNewTest}
                  className={`flex-1 px-6 py-4 text-white rounded-xl transition-all duration-200 shadow-lg ${
                    qualifiesForLeaderboard
                      ? "bg-gradient-to-r from-green-700 to-green-600 text-white hover:from-green-500 hover:to-green-600"
                      : "bg-gradient-to-r from-yellow-700 to-yellow-600 text-white hover:from-yellow-500 hover:to-yellow-600"
                  }`}
                >
                  Evet, Başlat
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowConfirm(false)}
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-200 rounded-xl hover:from-gray-300 hover:to-gray-200 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-200"
                >
                  Vazgeç
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
