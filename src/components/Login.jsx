import { useApp } from "../context/AppContext";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const Login = () => {
  const { signInWithGoogle } = useApp();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md"
      >
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="px-8 pt-8 pb-6">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center mb-6"
            >
              <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center">
                <FcGoogle className="w-8 h-8" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl sm:text-3xl font-bold text-center mb-2 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-white"
            >
              Frontend Interview Hazırlık
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center text-gray-600 dark:text-gray-400 mb-8"
            >
              Google hesabınızla giriş yaparak başlayın
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={signInWithGoogle}
              className="w-full flex items-center justify-center gap-3 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-xl px-6 py-3 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-gray-800"
            >
              <FcGoogle className="text-2xl" />
              <span className="font-medium">Google ile Giriş Yap</span>
            </motion.button>
          </div>

          <div className="px-8 py-4 bg-gray-50 dark:bg-gray-700/50 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Frontend mülakatlarına hazırlanmak için en iyi yol
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
