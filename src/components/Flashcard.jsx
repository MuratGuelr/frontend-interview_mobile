import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiChevronLeft,
  FiChevronRight,
  FiRotateCw,
  FiX,
  FiShuffle,
  FiChevronDown,
  FiChevronUp,
  FiMinimize2,
  FiMaximize2,
  FiGrid,
} from "react-icons/fi";
import { MdHtml, MdCss, MdJavascript } from "react-icons/md";
import { FaReact, FaBrain } from "react-icons/fa";
import { CATEGORIES, CATEGORY_NAMES } from "../data/questions";
import { useApp } from "../context/AppContext";
import React from "react";

// Kategori stilleri
const categoryStyles = {
  [CATEGORIES.HTML]: {
    icon: MdHtml,
    activeGradient: "from-orange-500 to-red-600",
    inactiveGradient: "from-orange-500/20 to-red-600/20",
    iconColor: "text-orange-500",
    hoverBg: "hover:bg-orange-500/10",
  },
  [CATEGORIES.CSS]: {
    icon: MdCss,
    activeGradient: "from-blue-500 to-indigo-600",
    inactiveGradient: "from-blue-500/20 to-indigo-600/20",
    iconColor: "text-blue-500",
    hoverBg: "hover:bg-blue-500/10",
  },
  [CATEGORIES.JAVASCRIPT]: {
    icon: MdJavascript,
    activeGradient: "from-yellow-500 to-amber-600",
    inactiveGradient: "from-yellow-500/20 to-amber-600/20",
    iconColor: "text-yellow-500",
    hoverBg: "hover:bg-yellow-500/10",
  },
  [CATEGORIES.REACT]: {
    icon: FaReact,
    activeGradient: "from-cyan-500 to-blue-600",
    inactiveGradient: "from-cyan-500/20 to-blue-600/20",
    iconColor: "text-cyan-500",
    hoverBg: "hover:bg-cyan-500/10",
  },
  [CATEGORIES.ALL]: {
    icon: FiGrid,
    activeGradient: "from-gray-500 to-slate-600",
    inactiveGradient: "from-gray-500/20 to-slate-600/20",
    iconColor: "text-gray-500",
    hoverBg: "hover:bg-gray-500/10",
  },
};

const cardVariants = {
  front: {
    rotateY: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 50,
    },
  },
  back: {
    rotateY: 180,
    scale: 1,
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 50,
    },
  },
  hover: {
    scale: 1.02,
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
    transition: {
      duration: 0.2,
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
  },
  tap: {
    scale: 0.95,
  },
};

const QuestionPreviewModal = ({
  isOpen,
  onClose,
  questions,
  currentIndex,
  onSelect,
}) => {
  if (!isOpen) return null;

  // Zorluk seviyesi için renk ve etiket belirleme
  const getDifficultyStyle = (difficulty) => {
    switch (difficulty) {
      case "easy":
        return {
          bg: "bg-green-500/20",
          text: "text-green-300",
          label: "Kolay",
        };
      case "medium":
        return {
          bg: "bg-yellow-500/20",
          text: "text-yellow-300",
          label: "Orta",
        };
      case "hard":
        return {
          bg: "bg-red-500/20",
          text: "text-red-300",
          label: "Zor",
        };
      default:
        return {
          bg: "bg-gray-500/20",
          text: "text-gray-300",
          label: "Belirsiz",
        };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gray-800 rounded-2xl p-4 w-full max-w-lg max-h-[80vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white">Soru Listesi</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <FiX className="text-gray-400 hover:text-white text-xl" />
          </button>
        </div>

        <div className="overflow-y-auto flex flex-col gap-2 p-1">
          {questions.map((q, index) => {
            const difficultyStyle = getDifficultyStyle(q.difficulty);

            return (
              <motion.button
                key={index}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => {
                  onSelect(index);
                  onClose();
                }}
                className={`p-4 rounded-xl text-left transition-all ${
                  currentIndex === index
                    ? "bg-primary-600 text-white"
                    : "bg-gray-700 text-gray-200 hover:bg-gray-600"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-black/20 text-sm font-medium">
                    {index + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyStyle.bg} ${difficultyStyle.text}`}
                      >
                        {difficultyStyle.label}
                      </span>
                    </div>
                    <p className="text-sm line-clamp-2">{q.question}</p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};

// Touch olayları için minimum mesafe
const minSwipeDistance = 50;

export const Flashcard = ({
  question,
  questions,
  currentIndex,
  total,
  onNext,
  onPrev,
  onJumpTo,
  isRandomMode,
  onToggleRandomMode,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [focusVideoType, setFocusVideoType] = useState("subway"); // 'subway', 'jetpack', 'relax'
  const [showFocusMenu, setShowFocusMenu] = useState(false);
  const [pressTimer, setPressTimer] = useState(null);
  const { currentCategory, setCurrentCategory } = useApp();

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart({
      y: e.targetTouches[0].clientY,
      x: e.targetTouches[0].clientX,
    });
  };

  const onTouchMove = (e) => {
    setTouchEnd({
      y: e.targetTouches[0].clientY,
      x: e.targetTouches[0].clientX,
    });
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distanceY = touchStart.y - touchEnd.y;
    const distanceX = touchStart.x - touchEnd.x;
    const isSignificantMoveY = Math.abs(distanceY) > minSwipeDistance;
    const isSignificantMoveX = Math.abs(distanceX) > minSwipeDistance;

    if (isSignificantMoveY && Math.abs(distanceY) > Math.abs(distanceX)) {
      if (distanceY > 0) {
        handleNext(new Event("swipe"));
      } else {
        handlePrev(new Event("swipe"));
      }
    } else if (
      isSignificantMoveX &&
      Math.abs(distanceX) > Math.abs(distanceY)
    ) {
      setIsFlipped(!isFlipped);
    }
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen();
      screen.orientation.lock("portrait").catch(() => {
        // Orientation lock desteklenmiyor veya izin verilmedi
      });
    } else {
      document.exitFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  const handleCategorySelect = (category) => {
    // Sadece kategoriyi güncelle, tam ekranı etkileme
    setCurrentCategory(category);
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setDirection(1);
    setIsFlipped(false);
    onNext();
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setDirection(-1);
    setIsFlipped(false);
    onPrev();
  };

  const handleSelectQuestion = (index) => {
    onJumpTo(index);
    setIsFlipped(false);
    setIsModalOpen(false);
  };

  const toggleFocusMode = () => {
    setFocusVideoType("subway"); // Tek tıklandığında subway.mp4'i seç
    setIsFocusMode(!isFocusMode);
  };

  const handleFocusPress = () => {
    const timer = setTimeout(() => {
      setShowFocusMenu(true);
      clearTimeout(timer);
      setPressTimer(null);
    }, 500);
    setPressTimer(timer);
  };

  const handleFocusRelease = () => {
    if (pressTimer) {
      clearTimeout(pressTimer);
      setPressTimer(null);
      if (!showFocusMenu) {
        setFocusVideoType("subway");
        setIsFocusMode(true);
      }
    }
  };

  const handleFocusVideoSelect = (type) => {
    setFocusVideoType(type);
    setShowFocusMenu(false);
    setIsFocusMode(false);
    setTimeout(() => {
      setIsFocusMode(true);
    }, 100);
  };

  const getVideoSource = () => {
    switch (focusVideoType) {
      case "jetpack":
        return "/jetpack.mp4";
      case "relax":
        return "/relax.mp4";
      case "cooked":
        return "/iamcooked.mp4";
      default:
        return "/subway.mp4";
    }
  };

  return (
    <div
      className={`relative ${
        isFullscreen ? "fixed inset-0 bg-gray-900 z-50" : ""
      }`}
    >
      {/* Focus Mode Video Background */}
      {isFocusMode && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source src={getVideoSource()} type="video/mp4" />
          </video>
        </div>
      )}

      {/* Mini Video Player */}
      {isFocusMode && (
        <div className="fixed bottom-24 left-6 z-40 w-24 h-40 rounded-xl overflow-hidden shadow-lg bg-black/20 backdrop-blur-sm">
          <video
            autoPlay
            loop
            playsInline
            className="w-full h-full object-cover opacity-40"
          >
            <source src={getVideoSource()} type="video/mp4" />
          </video>
        </div>
      )}

      {/* Focus Mode Menu */}
      {showFocusMenu && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gray-800 rounded-2xl p-6 w-full max-w-sm"
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              Odaklanma Modu Seçenekleri
            </h3>
            <div className="space-y-3">
              <button
                onClick={() => handleFocusVideoSelect("subway")}
                className="w-full p-4 rounded-xl bg-gray-700 hover:bg-gray-600 text-white text-left flex items-center gap-3 transition-colors"
              >
                <FaBrain className="text-2xl text-purple-500" />
                <span>Subway Surfers</span>
              </button>
              <button
                onClick={() => handleFocusVideoSelect("jetpack")}
                className="w-full p-4 rounded-xl bg-gray-700 hover:bg-gray-600 text-white text-left flex items-center gap-3 transition-colors"
              >
                <FaBrain className="text-2xl text-blue-500" />
                <span>Jetpack Joyride</span>
              </button>
              <button
                onClick={() => handleFocusVideoSelect("relax")}
                className="w-full p-4 rounded-xl bg-gray-700 hover:bg-gray-600 text-white text-left flex items-center gap-3 transition-colors"
              >
                <FaBrain className="text-2xl text-green-500" />
                <span>Relaxing Videos</span>
              </button>
              <button
                onClick={() => {
                  setShowFocusMenu(false);
                  setIsFocusMode(false);
                }}
                className="w-full p-4 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-300 text-left flex items-center gap-3 transition-colors"
              >
                <FiX className="text-2xl" />
                <span>İptal</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {isFullscreen && !isFocusMode && (
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%)]" />
          <div className="absolute inset-0 backdrop-blur-[100px]" />
        </div>
      )}

      {/* Kategori Seçimi ve Butonlar */}
      <div
        className={`flex items-center gap-4 ${
          isFullscreen
            ? "p-3 sm:p-5 bg-gray-800/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50"
            : "mb-3 sm:mb-5"
        }`}
      >
        {/* Kategori Seçimi */}
        <div className="flex-1 flex gap-2 overflow-x-auto hide-scrollbar py-1.5">
          <button
            onClick={() => handleCategorySelect(CATEGORIES.ALL)}
            className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl text-sm transition-all ${
              currentCategory === CATEGORIES.ALL
                ? `bg-gradient-to-br ${
                    categoryStyles[CATEGORIES.ALL].activeGradient
                  } shadow-lg`
                : `bg-gray-800 ${categoryStyles[CATEGORIES.ALL].hoverBg}`
            }`}
            title="Tüm Konular"
          >
            {React.createElement(categoryStyles[CATEGORIES.ALL].icon, {
              className: `text-2xl ${
                currentCategory === CATEGORIES.ALL
                  ? "text-white"
                  : categoryStyles[CATEGORIES.ALL].iconColor
              }`,
            })}
          </button>
          {Object.entries(CATEGORY_NAMES).map(
            ([key, name]) =>
              key !== CATEGORIES.ALL && (
                <button
                  key={key}
                  onClick={() => handleCategorySelect(key)}
                  className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl text-sm transition-all ${
                    currentCategory === key
                      ? `bg-gradient-to-br ${categoryStyles[key].activeGradient} shadow-lg`
                      : `bg-gray-800 ${categoryStyles[key].hoverBg}`
                  }`}
                  title={name}
                >
                  {React.createElement(categoryStyles[key].icon, {
                    className: `text-2xl ${
                      currentCategory === key
                        ? "text-white"
                        : categoryStyles[key].iconColor
                    }`,
                  })}
                </button>
              )
          )}
        </div>

        {/* Odaklanma Modu Butonu */}
        <button
          onMouseDown={handleFocusPress}
          onMouseUp={handleFocusRelease}
          onTouchStart={handleFocusPress}
          onTouchEnd={handleFocusRelease}
          className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl transition-colors ${
            isFocusMode
              ? "bg-gradient-to-br from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white shadow-lg"
              : "bg-gray-800 hover:bg-gray-700 text-white"
          }`}
          title={
            isFocusMode
              ? "Odaklanma Modunu Kapat"
              : "Odaklanma Modu (Seçenekler için basılı tutun)"
          }
        >
          <FaBrain className="text-2xl" />
        </button>

        {/* Karıştırma Butonu */}
        <button
          onClick={onToggleRandomMode}
          className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl transition-colors ${
            isRandomMode
              ? "bg-gradient-to-br from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white shadow-lg"
              : "bg-gray-800 hover:bg-gray-700 text-white"
          }`}
          title={isRandomMode ? "Sıralı Moda Geç" : "Soruları Karıştır"}
        >
          <FiShuffle className="text-2xl" />
        </button>

        {/* Tam Ekran Butonu */}
        <button
          onClick={toggleFullscreen}
          className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl transition-colors ${
            isFullscreen
              ? "bg-gradient-to-br from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg"
              : "bg-gray-800 hover:bg-gray-700 text-white"
          }`}
          title={isFullscreen ? "Tam Ekrandan Çık" : "Tam Ekran"}
        >
          {isFullscreen ? (
            <FiMinimize2 className="text-2xl" />
          ) : (
            <FiMaximize2 className="text-2xl" />
          )}
        </button>
      </div>

      {/* Flashcard Container */}
      <div
        className={`${
          isFullscreen
            ? "fixed inset-0 pt-20 sm:pt-24 px-4 sm:px-6 pb-6 z-10" // Header için yer bırak ve padding ekle
            : "h-[calc(100vh-200px)]"
        } w-full perspective-1000`}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: direction * 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: direction * -100 }}
            transition={{ duration: 0.2 }}
            className="relative w-full h-full"
          >
            <motion.div
              className="relative w-full h-full cursor-pointer"
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{
                duration: 0.65,
                type: "spring",
                stiffness: 50,
                damping: 12,
              }}
              onClick={handleFlip}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Ön Yüz */}
              <div
                className="absolute w-full h-full p-5 sm:p-8 flex flex-col rounded-2xl"
                style={{
                  backfaceVisibility: "hidden",
                  background:
                    "linear-gradient(135deg, rgb(47, 63, 90) 0%, rgb(15, 23, 42) 100%)",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                }}
              >
                <div className="flex-1 flex flex-col">
                  {/* Zorluk Seviyesi */}
                  <div className="text-center mb-4 sm:mb-6">
                    <span
                      className={`px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-md ${
                        question.difficulty === "easy"
                          ? "bg-green-500/20 text-green-300"
                          : question.difficulty === "medium"
                          ? "bg-yellow-500/20 text-yellow-300"
                          : "bg-red-500/20 text-red-300"
                      }`}
                    >
                      {question.difficulty === "easy"
                        ? "Kolay"
                        : question.difficulty === "medium"
                        ? "Orta"
                        : "Zor"}
                    </span>
                  </div>

                  {/* Soru */}
                  <div className="flex-1 flex items-center justify-center">
                    <p className="text-xl sm:text-3xl font-medium text-white text-center leading-relaxed">
                      {question.question}
                    </p>
                  </div>

                  {/* Yönlendirme Metinleri */}
                  <div className="flex flex-col items-center gap-2 mt-4 text-gray-400/60">
                    <span className="text-sm backdrop-blur-md bg-white/5 px-3 py-1.5 rounded-full">
                      Çevirmek için sağa/sola kaydırın
                    </span>
                    <div className="flex items-center gap-1">
                      <FiChevronUp className="text-lg" />
                      <span className="text-sm">
                        Sonraki soru için yukarı kaydırın
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arka Yüz */}
              <div
                className="absolute w-full h-full p-5 sm:p-8 flex flex-col rounded-2xl"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  background:
                    "linear-gradient(135deg, rgb(1, 109, 163) 0%, rgb(0, 59, 90) 100%)",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                }}
              >
                <div className="flex-1 flex items-center justify-center">
                  <p className="text-xl sm:text-3xl font-medium text-white text-center leading-relaxed">
                    {question.answer}
                  </p>
                </div>
                <div className="text-center mt-4">
                  <span className="text-sm backdrop-blur-md bg-white/5 px-3 py-1.5 rounded-full text-blue-200/60">
                    Çevirmek için sağa/sola kaydırın
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* İlerleme Göstergesi */}
        <div className="fixed bottom-6 left-6 right-6 flex justify-between items-center text-white text-sm">
          <button
            onClick={() => setIsModalOpen(true)}
            className="backdrop-blur-md bg-black/20 px-4 py-2 rounded-full text-base flex items-center gap-2 hover:bg-black/30 transition-colors"
          >
            <span>
              {currentIndex + 1} / {total}
            </span>
            <FiChevronUp className="text-lg" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <QuestionPreviewModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            questions={questions || []}
            currentIndex={currentIndex}
            onSelect={handleSelectQuestion}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

// Stil eklemeleri için CSS
const styles = `
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
`;

// Stil ekle
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
