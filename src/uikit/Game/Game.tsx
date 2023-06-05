import React from 'react';

import { GameRow } from '@src/uikit/GameGrid';

import { useFieldGenerator } from './hooks/useFieldGenerator';
import { useRender } from './hooks/useRender';

import styles from './game.module.scss';

export const Game = () => {
  const { gameRef } = useFieldGenerator();
  const { field } = useRender();

  // console.log(field);

  return (
    <div ref={gameRef} className={styles.game}>
      <div className={styles.display}>
        {field.length && field.map((row) => <GameRow key={`${row[0].x}-${row[0].y}`} row={row} />)}
      </div>

      <div className={styles.floor} />
    </div>
  );
};
