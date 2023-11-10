import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useEffect, useState } from 'react';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useDebounce = (value: string) => {
  const [debounceValue, setDebounceValue] = useState('');

  useEffect(() => {
    const changeValueTimeout = setTimeout(() => {
      setDebounceValue(value);
    }, 500);

    return () => {
      clearTimeout(changeValueTimeout);
    };
  }, [value]);

  return { debounceValue };
};
