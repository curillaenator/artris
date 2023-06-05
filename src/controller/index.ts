/* eslint-disable require-jsdoc */
import { CUBE, ZHAPE } from './figures.schema';
import type { Field, Tet, TetNames, TetRotations, Colors } from '@src/types';

const RANDOM_NAME_ASSOC: Record<number, TetNames> = {
  1: 'cube',
  2: 'cross',
  3: 'zhape',
  4: 'shape',
  5: 'line',
};

const RANDOM_COLOR_ASSOC: Record<number, Colors> = {
  1: 'blue',
  2: 'red',
  3: 'orange',
  4: 'green',
  5: 'violet',
};

class TetFigure {
  private cube: Tet;
  private cross: Tet;
  private zhape: Tet;
  private shape: Tet;
  private line: Tet;

  constructor() {
    this.cube = CUBE;
    this.cross = CUBE;
    this.zhape = ZHAPE;
    this.shape = ZHAPE;
    this.line = ZHAPE;
  }

  getTet() {
    return this[this.getRandomName()];
  }

  private getRandomName() {
    const random = Math.ceil(Math.random() * Object.keys(RANDOM_NAME_ASSOC).length);
    return RANDOM_NAME_ASSOC[random];
  }

  getRandomColor() {
    const random = Math.ceil(Math.random() * Object.keys(RANDOM_COLOR_ASSOC).length);
    return RANDOM_COLOR_ASSOC[random];
  }
}

export class Controller {
  private _field: Field = [];
  private _currentTet: Tet | null = null;
  private _currentTetColor: Colors = 'emphasis';
  private _nextTet: Tet | null = null;
  private _figureControl: TetFigure;

  private _tetCount = 0;
  private _start = 0;
  private _Y = 0;
  private _X = 5;

  private _rotation: TetRotations = '0deg';
  private _isTetCycle = true;

  constructor() {
    const tetFigure = new TetFigure();
    this._nextTet = tetFigure.getTet();
    this._figureControl = tetFigure;
  }

  getField() {
    return this._field;
  }

  setField(field: Field) {
    this._field = field;
    this._start = field.length - 1;
    this._Y = field.length - 1;
  }

  private updateField() {
    // const { rotations } = this._currentTet as Tet;

    // const tetSchema = rotations[this._rotation];

    const Y = this._Y;
    const X = this._X;

    console.log(X, Y);

    const newField: Field = this._field.map((row, yI) =>
      row.map(({ color, ...rest }, xI) => {
        if (Y === yI && X === xI) {
          return {
            ...rest,
            color: this._currentTetColor,
          };
        }

        return { ...rest, color };
      }),
    );

    this._field = newField;
  }

  private spawn() {
    this._isTetCycle = true;
    this._currentTetColor = this._figureControl.getRandomColor();
    this._tetCount = this._tetCount + 1;
    this._currentTet = this._nextTet;
    this._nextTet = this._figureControl.getTet();
  }

  cycle() {
    if (!this._isTetCycle) {
      this.spawn();
    }

    if (this._Y === 0) {
      this._Y = this._start;
      this._isTetCycle = false;
    }

    if (this._Y > 0) {
      this._Y = this._Y - 1;
    }

    this.updateField();
  }
}
