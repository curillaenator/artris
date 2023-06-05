import React, { FC } from 'react';

import { GameCell } from './GameCell';

import type { Cell } from '@src/types';
import styles from './gamerow.module.scss';

interface GameRowProps {
  row: Cell[];
}

export const GameRow: FC<GameRowProps> = (props) => {
  const { row } = props;

  return (
    <div className={styles.row}>
      {row.map(({ x, y, color }) => (
        <GameCell key={`x${x}_y${y}`} id={`${x}-${y}`} data-x={x} data-y={y} x={x} y={y} color={color} />
      ))}
    </div>
  );
};
