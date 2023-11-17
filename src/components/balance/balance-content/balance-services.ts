import { NavigateFunction } from 'react-router-dom';
import { AppDispatch } from '../../../store/store';
import { resetAttemptCount, resetCount } from '../../../store/authSlice';

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

export function toggleQuiz(
  setIsQuiz: React.Dispatch<React.SetStateAction<boolean>>,
  dispatch?: AppDispatch
) {
  setIsQuiz((prev) => !prev);
  if (dispatch) {
    dispatch(resetCount());
    dispatch(resetAttemptCount());
  }
}
