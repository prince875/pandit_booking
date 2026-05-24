import { create } from "zustand";

interface AppState {
  user: string | null;
  login: (phone: string) => void;
  logout: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  user: null,

  login: (phone) =>
    set({
      user: phone,
    }),
    logout: () =>
      set({
        user: null,
      }),
}));
