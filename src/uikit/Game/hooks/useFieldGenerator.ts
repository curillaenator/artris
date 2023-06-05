import { useCallback } from 'react';

import { useGameStore } from '@src/store';
import { useResizeObserver } from '@src/utils';

export const useFieldGenerator = () => {
  const { maxTets, tetSize, setHeight, setRows, setField } = useGameStore();

  const onSizeChange = useCallback(
    (element: Element) => {
      if (!element) return;

      const gameHeight = element.clientHeight < tetSize ? tetSize : element.clientHeight;

      let calcedRows;

      if (tetSize === 0) {
        calcedRows = 1;
      } else {
        calcedRows = Math.floor((gameHeight - tetSize / 2) / tetSize);
      }

      setHeight(gameHeight);
      setRows(calcedRows);
      setField(
        [...new Array(calcedRows || 1)].map((_, y) =>
          [...new Array(maxTets)].map((_, x) => ({
            x,
            y,
            color: 'emphasis',
          })),
        ),
      );
    },
    [tetSize, maxTets, setField, setRows, setHeight],
  );

  const { ref: gameRef } = useResizeObserver(onSizeChange);

  return {
    gameRef,
  };
};
