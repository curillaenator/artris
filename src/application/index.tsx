import React, { useEffect } from 'react';

import { Menu } from '@src/uikit/Menu';

import CameraIcon from '@src/uikit/Icon/icons/CameraIcon';

import { useColorMode } from '@src/store';

import styles from './application.module.scss';

export const Application = () => {
  const { colorMode, setColorMode } = useColorMode();

  useEffect(() => {
    const html = document.querySelector('html');
    if (!!html) html.dataset['theme'] = colorMode;
  }, [colorMode]);

  return (
    <div className={styles.application}>
      <div className={styles.game}></div>

      <CameraIcon onClick={() => setColorMode()} />
      <Menu />
    </div>
  );
};
