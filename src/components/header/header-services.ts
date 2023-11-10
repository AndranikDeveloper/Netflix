import { NavigateFunction } from 'react-router-dom';
import { AppDispatch } from '../../store/store';
import { logOutUser } from '../../store/authSlice';

export function toggleLogin(navigate: NavigateFunction) {
  navigate('/auth');
}

export function logOut(dispatch: AppDispatch) {
  dispatch(logOutUser(null));
}
