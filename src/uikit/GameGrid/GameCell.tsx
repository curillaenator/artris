import React from 'react';

import { useCurrentTet } from '@src/store';

import styles from './gamecell.module.scss';

export const GameCell = () => {
  const setSize = useCurrentTet((state) => state.setSize);

  return <div className={styles.cell} ref={setSize}></div>;
};
