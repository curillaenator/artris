import { create } from 'zustand';

import type { ColorMode } from '@src/types';

interface ColorModeStore {
  colorMode: ColorMode;
  setColorMode: (colorMode?: ColorMode) => void;
}

const INVERTOR: Record<ColorMode, ColorMode> = {
  light: 'dark',
  dark: 'light',
};

export const useColorMode = create<ColorModeStore>((set) => ({
  colorMode: 'dark',
  setColorMode: (colorMode) => {
    if (!!colorMode) {
      set(() => ({ colorMode }));
    } else {
      set((state) => ({ colorMode: INVERTOR[state.colorMode] }));
    }
  },
}));
