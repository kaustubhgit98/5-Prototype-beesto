import { create } from "zustand";

interface SettingsState {
  customApiKey: string | null;
  fontSize: number;
  lineNumbers: boolean;
  minimap: boolean;
  wordWrap: boolean;
  setCustomApiKey: (key: string | null) => void;
  setFontSize: (size: number) => void;
  setLineNumbers: (enabled: boolean) => void;
  setMinimap: (enabled: boolean) => void;
  setWordWrap: (enabled: boolean) => void;
}

export const useSettingsStore = create<SettingsState>((set) => ({
  customApiKey: null,
  fontSize: 14,
  lineNumbers: true,
  minimap: true,
  wordWrap: false,
  setCustomApiKey: (key) => set({ customApiKey: key }),
  setFontSize: (size) => set({ fontSize: size }),
  setLineNumbers: (enabled) => set({ lineNumbers: enabled }),
  setMinimap: (enabled) => set({ minimap: enabled }),
  setWordWrap: (enabled) => set({ wordWrap: enabled }),
}));
