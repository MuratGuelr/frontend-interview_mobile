import { useState, useEffect } from "react";
import { auth } from "../firebase/config";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { createOrUpdateUser } from "../firebase/users";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        await createOrUpdateUser(user);
      }
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      await createOrUpdateUser(result.user);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return { user, loading, signInWithGoogle, logOut };
};
