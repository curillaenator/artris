import { useEffect, useRef, useCallback } from 'react';
import { useGameStore } from '@src/store';
import { debounced } from '@src/utils';

import { Controller } from '@src/controller';

export const useRender = () => {
  const { field, isRun, setFrame } = useGameStore();

  const interval = useRef<ReturnType<typeof setInterval> | null>(null);

  const { current } = useRef(new Controller());
  const { cycle, setField, getField } = current;

  const setFieldDebounced = useCallback(debounced(setField.bind(current)), []);

  useEffect(() => {
    setFieldDebounced(field);
  }, [field, setFieldDebounced]);

  useEffect(() => {
    if (isRun) {
      interval.current = setInterval(() => {
        cycle.call(current);
        setFrame();
      }, 1000);
    } else {
      if (interval.current) clearInterval(interval.current);
    }

    return () => {
      if (interval.current) clearInterval(interval.current);
    };
  }, [isRun]);

  return {
    field: getField.call(current),
  };
};
