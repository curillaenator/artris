import React from 'react';

import { Game } from '@src/uikit/Game';
import { Menu } from '@src/uikit/Menu';

import styles from './application.module.scss';

export const Application = () => {
  return (
    <div className={styles.application}>
      <Game />
      <Menu />
    </div>
  );
};
