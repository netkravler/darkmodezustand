import create from "zustand";

import { persist } from "zustand/middleware";

export const useDarkmodeStore = create(
  persist(
    (set) => ({
      theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
      setTheme: (theme) => set(() => ({ theme: theme })),
    }),
    { name: "themes" }
  )
);
