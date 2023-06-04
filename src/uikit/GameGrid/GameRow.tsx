import React, { FC } from 'react';

import { GameCell } from './GameCell';

import styles from './gamerow.module.scss';

interface GameRowProps {
  rowIndex?: number;
}

const getCels = (y: number) => {
  return [...new Array(12)].map((_, i) => ({ x: i, y }));
};

export const GameRow: FC<GameRowProps> = (props) => {
  const { rowIndex = 0 } = props;

  return (
    <div className={styles.row}>
      {getCels(rowIndex).map(({ x, y }) => (
        <GameCell key={`x${x}_y${y}`} />
      ))}
    </div>
  );
};
