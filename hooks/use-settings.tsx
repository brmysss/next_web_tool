import { create } from "zustand";

type SettingsStore = {
  isCollapsed: boolean;
  isMobileMenuOpen: boolean;
  isSearchDialogOpen: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
  setIsMobileMenuOpen: (isMobileMenuOpen: boolean) => void;
  setIsSearchDialogOpen: (isSearchDialogOpen: boolean) => void;
};

export const useSettings = create<SettingsStore>((set) => ({
  isCollapsed: false,
  isMobileMenuOpen: false,
  isSearchDialogOpen: false,
  setIsCollapsed: (isCollapsed: boolean) => set({ isCollapsed }),
  setIsMobileMenuOpen: (isMobileMenuOpen: boolean) => set({ isMobileMenuOpen }),
  setIsSearchDialogOpen: (isSearchDialogOpen: boolean) =>
    set({ isSearchDialogOpen }),
}));
