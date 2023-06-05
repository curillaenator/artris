import { create } from 'zustand';
import { throttled } from '@src/utils';

import type { Cell } from '@src/types';

interface GameStore {
  maxTets: number;

  isRun: boolean;
  frame: number;

  setRun: () => void;
  setStop: () => void;
  setFrame: () => void;

  height: number;
  rows: number;
  field: Cell[][];

  setHeight: (h: number) => void;
  setRows: (rows: number) => void;
  setField: (field: Cell[][]) => void;

  tetSize: number;

  setSize: (inst: HTMLDivElement) => void;
}

export const useGameStore = create<GameStore>((set, get) => ({
  maxTets: 12,

  isRun: false,
  frame: 0,

  setRun: () => set(() => ({ isRun: true })),
  setStop: () => set(() => ({ isRun: false })),
  setFrame: () => set((state) => ({ frame: state.frame + 1 })),

  height: 0,
  rows: 1,
  field: [],

  setHeight: (height) => set(() => ({ height })),
  setRows: (rows) => set(() => ({ rows })),
  setField: (field) => set(() => ({ field })),

  tetSize: 0,

  setSize: throttled((inst) => set({ tetSize: inst?.clientWidth || 0 })),
}));
