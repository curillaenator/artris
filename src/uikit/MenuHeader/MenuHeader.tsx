import React from 'react';

import MoonIcon from '@src/uikit/Icon/icons/MoonIcon';
import SunIcon from '@src/uikit/Icon/icons/SunIcon';

import { useColorMode } from '@src/store';

import styles from './menuheader.module.scss';

export const MenuHeader = () => {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <header className={styles.menuHeader}>
      <h2>Artris</h2>

      <button type='button' onClick={() => setColorMode()}>
        {colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
      </button>
    </header>
  );
};
