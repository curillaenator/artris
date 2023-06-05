import React, { FC, HTMLAttributes } from 'react';
import cn from 'classnames';

import { useGameStore } from '@src/store';

import type { Cell } from '@src/types';
import styles from './gamecell.module.scss';

interface GameCellProps extends Cell, Omit<HTMLAttributes<HTMLDivElement>, 'color'> {}

export const GameCell: FC<GameCellProps> = (props) => {
  const { id, color, ...rest } = props;

  // console.log(color);

  const setSize = useGameStore((state) => state.setSize);

  return (
    <div {...rest} id={id} className={cn(styles.cell, styles[`cell-${color}`])} ref={setSize}>
      <div className={styles.indicator} />
    </div>
  );
};
