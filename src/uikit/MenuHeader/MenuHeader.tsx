import React from 'react';

import CameraIcon from '@src/uikit/Icon/icons/CameraIcon';

import styles from './menuheader.module.scss';

export const MenuHeader = () => {
  return (
    <header className={styles.menuHeader}>
      <CameraIcon />
    </header>
  );
};
