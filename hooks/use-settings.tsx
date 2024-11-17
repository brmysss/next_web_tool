import { create } from "zustand";

type SettingsStore = {
  isCollapsed: boolean;
  isMobileMenuOpen: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
  setIsMobileMenuOpen: (isMobileMenuOpen: boolean) => void;
};

export const useSettings = create<SettingsStore>((set) => ({
  isCollapsed: false,
  isMobileMenuOpen: false,
  setIsCollapsed: (isCollapsed: boolean) => set({ isCollapsed }),
  setIsMobileMenuOpen: (isMobileMenuOpen: boolean) => set({ isMobileMenuOpen }),
}));
