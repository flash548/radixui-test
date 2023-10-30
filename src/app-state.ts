import { create } from "zustand";

export type ThemeMode = "dark" | "light";

export interface AppState {
  darkTheme: boolean;
  setDarkTheme: (darkTheme: boolean) => void;
  themeMode: ThemeMode;
}

export const useAppState = create<AppState>((set) => ({
  darkTheme: false,
  setDarkTheme: (darkTheme: boolean) =>
    set(() => ({
      darkTheme,
      themeMode: darkTheme ? "dark" : "light",
    })),
  themeMode: "light",
}));
