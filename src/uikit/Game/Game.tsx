import React from 'react';

import { GameRow } from '@src/uikit/GameGrid';
import { Tet } from '@src/uikit/Tet';

import styles from './game.module.scss';

const ROWS = [...new Array(30)].map((_, i) => ({ rowIndex: i })); // туду: генерировать нужное к0во строк

export const Game = () => {
  return (
    <div className={styles.game}>
      <div className={styles.display}>
        <Tet />

        {ROWS.map((row) => (
          <GameRow key={row.rowIndex} {...row} />
        ))}
      </div>

      <div className={styles.floor} />
    </div>
  );
};
