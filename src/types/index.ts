export type ColorMode = 'light' | 'dark';
export type TetRotations = '0deg' | '90deg' | '180deg' | '270deg';
export type Colors = 'blue' | 'violet' | 'orange' | 'green' | 'red' | 'emphasis';

export interface Cell {
  x: number;
  y: number;
  color: Colors;
}

export type Field = Cell[][];

export type TetNames = 'cube' | 'cross' | 'zhape' | 'shape' | 'line';

export interface Tet {
  name: TetNames;
  rotation: TetRotations;
  rotations: Record<TetRotations, number[][]>;
}
