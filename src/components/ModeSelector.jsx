import { useApp } from "../context/AppContext";
import { motion } from "framer-motion";
import { FiBook, FiEdit } from "react-icons/fi";

const modes = [
  {
    id: "flashcards",
    name: "Flashcard Modu",
    icon: FiBook,
    description: "Kartları çevirerek öğren",
  },
  {
    id: "test",
    name: "Test Modu",
    icon: FiEdit,
    description: "Kendini test et",
  },
];

export const ModeSelector = () => {
  const { currentMode, setCurrentMode } = useApp();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
      {modes.map((mode) => {
        const Icon = mode.icon;
        const isActive = currentMode === mode.id;

        return (
          <motion.button
            key={mode.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setCurrentMode(mode.id)}
            className={`relative overflow-hidden group p-6 rounded-2xl transition-all ${
              isActive
                ? "bg-slate-800 text-white"
                : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200"
            }`}
          >
            <motion.div
              initial={false}
              animate={{
                scale: isActive ? 1.2 : 1,
                opacity: isActive ? 0.2 : 0.1,
              }}
              className={`absolute top-0 right-0 p-6 ${
                isActive ? "text-white" : "text-gray-900 dark:text-gray-100"
              }`}
            >
              <Icon className="w-12 h-12" />
            </motion.div>

            <div className="relative z-10 flex flex-col items-start text-left">
              <div className="flex items-center gap-3 mb-2">
                <Icon
                  className={`w-6 h-6 ${
                    isActive ? "text-white" : "text-primary-500"
                  }`}
                />
                <span className="font-semibold">{mode.name}</span>
              </div>
              <p
                className={`text-sm ${
                  isActive
                    ? "text-primary-100"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              >
                {mode.description}
              </p>
            </div>

            <div
              className={`absolute bottom-0 left-0 h-1 transition-all duration-300 ${
                isActive ? "bg-white/20" : "bg-primary-500/20"
              } ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
            />
          </motion.button>
        );
      })}
    </div>
  );
};
