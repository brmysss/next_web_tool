import { create } from "zustand";

type SettingsStore = {
  isCollapsed: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
};

export const useSettings = create<SettingsStore>((set) => ({
  isCollapsed: false,
  setIsCollapsed: (isCollapsed: boolean) => set({ isCollapsed }),
}));
