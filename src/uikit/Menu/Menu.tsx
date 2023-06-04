import React from 'react';

import { MenuHeader } from '@src/uikit/MenuHeader';
import { MenuDisplayNext } from '@src/uikit/MenuDisplayNext';

import styles from './menu.module.scss';

export const Menu = () => {
  return (
    <div className={styles.menu}>
      <MenuHeader />
      <MenuDisplayNext />
    </div>
  );
};
