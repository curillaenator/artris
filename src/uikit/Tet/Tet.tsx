import React, { FC } from 'react';
import cn from 'classnames';

import styles from './tet.module.scss';

import { useCurrentTet } from '@src/store';

import { TETS } from './tet.shema';
import { TET } from '@src/types';

type TetProps = Partial<TET>;

export const Tet: FC<TetProps> = (props) => {
  const { id, rotations = TETS.cube.rotations } = props;

  const { tetId, size, setTetID } = useCurrentTet();

  console.log(size, id, tetId, setTetID);

  return (
    <div className={cn(styles.tet, styles.tet_fall)}>
      {rotations['0deg'].map((row, i) => (
        <div key={`row_${i}`} className={styles.row}>
          {row.map((cell, j) => (
            <div
              key={`cell_${j}`}
              data-rigid={String(cell)}
              className={cn(styles.bar, {
                [styles.bar_rigid]: !!cell,
              })}
              style={{
                width: size,
                height: size,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
