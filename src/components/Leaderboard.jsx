import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiAward, FiClock } from "react-icons/fi";
import { MdHtml, MdCss, MdJavascript } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { useApp } from "../context/AppContext";
import { db, COLLECTIONS } from "../firebase/config";
import {
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  where,
} from "firebase/firestore";
import { CATEGORIES, CATEGORY_NAMES } from "../data/questions";
import { getUserData } from "../firebase/users";

export const Leaderboard = () => {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES.ALL);
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        setLoading(true);
        let q;
        if (selectedCategory === CATEGORIES.ALL) {
          q = query(
            collection(db, COLLECTIONS.TEST_RESULTS),
            where("score", ">=", 8),
            orderBy("score", "desc"),
            orderBy("timeSpent", "asc"),
            limit(10)
          );
        } else {
          q = query(
            collection(db, COLLECTIONS.TEST_RESULTS),
            where("category", "==", selectedCategory),
            where("score", ">=", 8),
            orderBy("score", "desc"),
            orderBy("timeSpent", "asc"),
            limit(10)
          );
        }
        const querySnapshot = await getDocs(q);
        const results = await Promise.all(
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
        setLeaderboard(results);
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, [selectedCategory]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  // Kategori stillerini tanımlayalım
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

  const getPositionStyle = (index) => {
    switch (index) {
      case 0:
        return "bg-gradient-to-r from-yellow-500/10 via-amber-500/10 to-orange-500/10 dark:from-yellow-500/20 dark:via-amber-500/20 dark:to-orange-500/20 border-l-4 border-yellow-500";
      case 1:
        return "bg-gradient-to-r from-slate-500/10 via-gray-500/10 to-slate-400/10 dark:from-slate-500/20 dark:via-gray-500/20 dark:to-slate-500/20 border-l-4 border-slate-500";
      case 2:
        return "bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-yellow-500/10 dark:from-orange-500/20 dark:via-amber-500/20 dark:to-yellow-500/20 border-l-4 border-orange-500";
      default:
        return "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50";
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-6 mb-8 shadow-xl">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/10 rounded-xl">
              <FiAward className="text-3xl text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Liderlik Tablosu</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {Object.entries(CATEGORY_NAMES).map(([key, name]) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(key)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  selectedCategory === key
                    ? "bg-white text-slate-800 shadow-lg"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {name}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-slate-200 dark:border-slate-700 border-t-slate-800 dark:border-t-slate-300"></div>
        </div>
      ) : (
        <div className="space-y-4">
          {leaderboard.map((result, index) => (
            <motion.div
              key={result.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-xl shadow-lg transition-all duration-200 ${getPositionStyle(
                index
              )}`}
            >
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 w-16 h-16 relative">
                  <div
                    className={`absolute inset-0 rounded-full ${
                      index === 0
                        ? "bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-500"
                        : index === 1
                        ? "bg-gradient-to-br from-slate-400 via-gray-500 to-slate-600"
                        : index === 2
                        ? "bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-500"
                        : "bg-gradient-to-br from-gray-400 to-gray-500"
                    } shadow-lg`}
                  >
                    <div className="absolute inset-0.5 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                      {result.user?.photoURL ? (
                        <img
                          src={result.user.photoURL}
                          alt={result.user.displayName}
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : (
                        <span className="text-2xl font-bold">{index + 1}</span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-semibold text-gray-800 dark:text-white">
                      {result.user?.displayName || "Anonim Kullanıcı"}
                    </span>
                    {selectedCategory === CATEGORIES.ALL && (
                      <div
                        className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${
                          categoryStyles[result.category].gradient
                        } border border-${
                          categoryStyles[result.category].border
                        } flex items-center gap-2`}
                      >
                        <span
                          className={`text-sm font-medium ${
                            categoryStyles[result.category].iconColor
                          }`}
                        >
                          {CATEGORY_NAMES[result.category]}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30">
                        <FiAward className="text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-sm font-medium text-green-600 dark:text-green-400">
                        {((result.score / result.totalQuestions) * 100).toFixed(
                          1
                        )}
                        %
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30">
                        <FiClock className="text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        {formatTime(result.timeSpent)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="px-3 py-1 rounded-lg bg-gradient-to-r from-gray-100 to-slate-100 dark:from-gray-800 dark:to-slate-800 text-sm text-gray-600 dark:text-gray-400">
                    {new Date(result.timestamp.toDate()).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {leaderboard.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12 px-6 rounded-xl bg-gray-50 dark:bg-gray-800/50"
            >
              <FiAward className="text-4xl text-gray-400 dark:text-gray-500 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-600 dark:text-gray-400">
                Henüz bu kategoride liderlik tablosuna girebilen sonuç yok
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                İlk sırayı kapan siz olun!
              </p>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
};
