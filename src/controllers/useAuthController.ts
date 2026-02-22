import { useMemo, useState } from "react";
import type { SignInPayload, SignUpPayload } from "../models/auth";
import { authService } from "../services/authService";

export const useAuthController = () => {
  const [currentUser, setCurrentUser] = useState(() => authService.getCurrentUser());

  const isAuthenticated = useMemo(() => Boolean(currentUser), [currentUser]);

  const signIn = (payload: SignInPayload) => {
    const user = authService.signIn(payload);
    setCurrentUser(user);
    return user;
  };

  const signUp = (payload: SignUpPayload) => {
    const user = authService.signUp(payload);
    setCurrentUser(user);
    return user;
  };

  const signOut = () => {
    authService.signOut();
    setCurrentUser(null);
  };

  return {
    currentUser,
    isAuthenticated,
    signIn,
    signUp,
    signOut,
  };
};
