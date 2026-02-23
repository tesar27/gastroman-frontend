import type { AdminUser, SignInPayload, SignUpPayload } from "../models/auth";
import { STORAGE_KEYS } from "./storageKeys";
import { createId } from "../utils/createId";

interface StoredAdmin extends AdminUser {
  password: string;
}

const getStoredUsers = (): StoredAdmin[] => {
  const raw = localStorage.getItem(STORAGE_KEYS.users);
  if (!raw) return [];

  try {
    return JSON.parse(raw) as StoredAdmin[];
  } catch {
    return [];
  }
};

const setStoredUsers = (users: StoredAdmin[]): void => {
  localStorage.setItem(STORAGE_KEYS.users, JSON.stringify(users));
};

const persistSession = (user: AdminUser): void => {
  localStorage.setItem(STORAGE_KEYS.authUser, JSON.stringify(user));
  localStorage.setItem(STORAGE_KEYS.authToken, `fake-token-${user.id}`);
};

const toPublicUser = (user: StoredAdmin): AdminUser => ({
  id: user.id,
  name: user.name,
  email: user.email,
});

export const authService = {
  signIn(payload: SignInPayload): AdminUser {
    const users = getStoredUsers();

    const existing = users.find((user) => user.email.toLowerCase() === payload.email.toLowerCase());

    if (existing) {
      const publicUser = toPublicUser(existing);
      persistSession(publicUser);
      return publicUser;
    }

    const fallbackUser: StoredAdmin = {
      id: createId(),
      name: payload.email.split("@")[0] || "Admin",
      email: payload.email,
      password: payload.password,
    };

    users.push(fallbackUser);
    setStoredUsers(users);

    const publicUser = toPublicUser(fallbackUser);
    persistSession(publicUser);
    return publicUser;
  },

  signUp(payload: SignUpPayload): AdminUser {
    const users = getStoredUsers();
    const existing = users.find((user) => user.email.toLowerCase() === payload.email.toLowerCase());

    if (existing) {
      const publicUser = toPublicUser(existing);
      persistSession(publicUser);
      return publicUser;
    }

    const newUser: StoredAdmin = {
      id: createId(),
      name: payload.name,
      email: payload.email,
      password: payload.password,
    };

    users.push(newUser);
    setStoredUsers(users);

    const publicUser = toPublicUser(newUser);
    persistSession(publicUser);
    return publicUser;
  },

  signOut(): void {
    localStorage.removeItem(STORAGE_KEYS.authUser);
    localStorage.removeItem(STORAGE_KEYS.authToken);
  },

  getCurrentUser(): AdminUser | null {
    const raw = localStorage.getItem(STORAGE_KEYS.authUser);
    if (!raw) return null;

    try {
      return JSON.parse(raw) as AdminUser;
    } catch {
      return null;
    }
  },

  isAuthenticated(): boolean {
    return Boolean(localStorage.getItem(STORAGE_KEYS.authToken));
  },
};
