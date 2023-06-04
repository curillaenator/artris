import { create } from 'zustand';
import { throttled } from '@src/utils';

interface TetStore {
  size: number;
  tetId: number;
  setSize: (inst: HTMLDivElement) => void;
  setTetID: (id: number) => void;
}

export const useCurrentTet = create<TetStore>((set) => ({
  size: 32,
  tetId: 0,

  setSize: throttled((inst) => {
    set({ size: inst.clientWidth });
  }),

  setTetID: (id) => {
    set({ tetId: id });
  },
}));
