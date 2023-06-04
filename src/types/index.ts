export type ColorMode = 'light' | 'dark';
export type TetRotations = '0deg' | '90deg' | '180deg' | '270deg';

export interface TET {
  id: 'cube' | 'cross' | 'zhape' | 'shape' | 'line';
  rotations: Record<TetRotations, number[][]>;
}
