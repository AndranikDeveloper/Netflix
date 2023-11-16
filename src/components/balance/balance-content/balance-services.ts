import { NavigateFunction } from 'react-router-dom';

export function makeActive(
  setActiveFirst: (value: boolean) => void,
  setActiveSecond: (value: boolean) => void
) {
  setActiveFirst(true);
  setActiveSecond(false);
}

export function navigateToMain(navigate: NavigateFunction) {
  navigate('/');
}
