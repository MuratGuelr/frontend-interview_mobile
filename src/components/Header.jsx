import { useApp } from "../context/AppContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiLogOut,
  FiMenu,
  FiUser,
  FiTrendingUp,
  FiActivity,
  FiHome,
  FiX,
} from "react-icons/fi";
import { useState } from "react";

export const Header = ({ onNavigate }) => {
  const { user, logOut } = useApp();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      id: "main",
      label: "Ana Sayfa",
      icon: FiHome,
      onClick: () => {
        onNavigate("main");
        setIsMenuOpen(false);
      },
    },
    {
      id: "dashboard",
      label: "Dashboard",
      icon: FiActivity,
      onClick: () => {
        onNavigate("dashboard");
        setIsMenuOpen(false);
      },
    },
    {
      id: "leaderboard",
      label: "Liderlik Tablosu",
      icon: FiTrendingUp,
      onClick: () => {
        onNavigate("leaderboard");
        setIsMenuOpen(false);
      },
    },
    {
      id: "logout",
      label: "Çıkış Yap",
      icon: FiLogOut,
      onClick: () => {
        logOut();
        setIsMenuOpen(false);
      },
      className: "text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20",
    },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="relative flex flex-wrap justify-between items-center mb-6 sm:mb-8 gap-4"
    >
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onNavigate("main")}
        className="flex items-center gap-2 text-lg sm:text-xl font-bold text-gray-800 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
      >
        <FiHome className="text-primary-500" />
        <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
          Frontend Interview
        </span>
      </motion.button>

      <div className="flex items-center gap-4">
        {user && (
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="w-8 h-8 rounded-full ring-2 ring-primary-500"
              />
              <span className="hidden sm:block text-sm font-medium text-gray-700 dark:text-gray-300">
                {user.displayName}
              </span>
              {isMenuOpen ? (
                <FiX className="sm:hidden text-xl text-gray-600 dark:text-gray-400" />
              ) : (
                <FiMenu className="sm:hidden text-xl text-gray-600 dark:text-gray-400" />
              )}
            </motion.button>

            <AnimatePresence>
              {isMenuOpen && (
                <>
                  {/* Overlay for mobile */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 z-40 sm:hidden"
                    onClick={() => setIsMenuOpen(false)}
                  />

                  {/* Menu content */}
                  <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full mt-2 w-screen sm:w-56 py-2 bg-white dark:bg-gray-800 sm:rounded-xl shadow-xl z-50 border border-gray-200 dark:border-gray-700 sm:max-w-sm"
                  >
                    <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-3">
                        <img
                          src={user.photoURL}
                          alt={user.displayName}
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-800 dark:text-white truncate">
                            {user.displayName}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="py-2">
                      {menuItems.map((item) => (
                        <motion.button
                          key={item.id}
                          whileHover={{ x: 5 }}
                          onClick={item.onClick}
                          className={`w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                            item.className || "text-gray-700 dark:text-gray-300"
                          }`}
                        >
                          <item.icon className="text-lg" />
                          <span>{item.label}</span>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </motion.header>
  );
};
