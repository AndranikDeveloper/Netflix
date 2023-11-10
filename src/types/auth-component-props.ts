import { NavigateFunction } from 'react-router-dom';
import { AppDispatch } from '../store/store';
import { UserInfo, CurrentUser } from './store-types';

export type AuthComponent = {
  signName: string;
  isRegister: boolean;
  handleLogIn: (
    e: React.FormEvent,
    dispatch: AppDispatch,
    emailValue: string,
    passwordValue: string,
    setEmailMessage: (value: string) => void,
    setPasswordMessage: (value: string) => void,
    users: UserInfo[],
    currentUser: CurrentUser | null,
    navigate: NavigateFunction,
    setEmailValue: (value: string) => void,
    setPasswordValue: (value: string) => void
  ) => void;
};
