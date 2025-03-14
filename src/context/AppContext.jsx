import { createContext, useContext, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { CATEGORIES } from "../data/questions";

const AppContext = createContext();

export const useApp = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const { user, loading, signInWithGoogle, logOut } = useAuth();
  const [currentMode, setCurrentMode] = useState("flashcards"); // 'flashcards' | 'test'
  const [currentCategory, setCurrentCategory] = useState(CATEGORIES.ALL);

  const value = {
    user,
    loading,
    signInWithGoogle,
    logOut,
    currentMode,
    setCurrentMode,
    currentCategory,
    setCurrentCategory,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
