import type { Tet } from '@src/types';

export const ZHAPE: Tet = {
  name: 'zhape',
  rotation: '0deg',
  rotations: {
    '0deg': [
      [1, 1, 0],
      [0, 1, 1],
    ],
    '90deg': [
      [0, 1],
      [1, 1],
      [1, 0],
    ],
    '180deg': [
      [1, 1, 0],
      [0, 1, 1],
    ],
    '270deg': [
      [0, 1],
      [1, 1],
      [1, 0],
    ],
  },
};

export const CUBE: Tet = {
  name: 'cube',
  rotation: '0deg',
  rotations: {
    '0deg': [
      [1, 1],
      [1, 1],
    ],
    '90deg': [
      [1, 1],
      [1, 1],
    ],
    '180deg': [
      [1, 1],
      [1, 1],
    ],
    '270deg': [
      [1, 1],
      [1, 1],
    ],
  },
};
