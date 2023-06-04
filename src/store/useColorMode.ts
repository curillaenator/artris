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

  setColorMode: (cMode) => {
    set((state) => {
      const colorMode = !!cMode ? cMode : INVERTOR[state.colorMode];

      const html = document.querySelector('html');
      if (!!html) html.dataset['theme'] = colorMode;

      return { colorMode };
    });
  },
}));
