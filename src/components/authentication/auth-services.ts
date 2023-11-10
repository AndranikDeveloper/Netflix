import { CurrentUser } from './../../types/store-types';
import { logInUser, setCurrentUser } from '../../store/authSlice';
import { AppDispatch } from '../../store/store';
import { UserInfo } from '../../types/store-types';
import { NavigateFunction } from 'react-router-dom';

export function login(
  dispatch: AppDispatch,
  emailValue: string,
  passwordValue: string,
  setEmailValue: (value: string) => void,
  setPasswordValue: (value: string) => void
) {}

const validateEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const validatePassword =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

export const handleSubmitRegister = (
  e: React.FormEvent,
  dispatch: AppDispatch,
  emailValue: string,
  passwordValue: string,
  setEmailMessage: (value: string) => void,
  setPasswordMessage: (value: string) => void,
  users?: UserInfo[],
  currentUser?: CurrentUser | null,
  navigate?: NavigateFunction
) => {
  e.preventDefault();
  if (
    !validateEmail.test(emailValue) ||
    (emailValue === '' && !validatePassword.test(passwordValue)) ||
    passwordValue === ''
  ) {
    setEmailMessage('Email is not Valid');
    setPasswordMessage('Password is not Valid');
  } else {
    const newUser = {
      id: Date.now(),
      email: emailValue,
      password: passwordValue,
      amount: 120,
    };
    dispatch(logInUser(newUser));
    if (navigate) {
      navigate('/');
    }
  }
};

export const handleSubmitSignIn = (
  e: React.FormEvent,
  dispatch: AppDispatch,
  emailValue: string,
  passwordValue: string,
  setEmailMessage: (value: string) => void,
  setPasswordMessage: (value: string) => void,
  users?: UserInfo[],
  currentUser?: CurrentUser | null,
  navigate?: NavigateFunction,
  setEmailValue?: (value: string) => void
) => {
  e.preventDefault();

  if (
    !validateEmail.test(emailValue) ||
    (emailValue === '' && !validatePassword.test(passwordValue)) ||
    passwordValue === ''
  ) {
    setEmailMessage('Email is not Valid');
    setPasswordMessage('Password is not Valid');
  } else {
    const newUser = users?.find(
      (user) => user.email === emailValue && user.password === passwordValue
    );
    if (newUser) {
      dispatch(setCurrentUser(newUser));
      if (navigate && setEmailValue) {
        navigate('/');
        setEmailValue('');
        setEmailMessage('');
        setPasswordMessage('');
      }
    } else {
      setEmailMessage('The Password or Email is not Right');
      setPasswordMessage('');
    }
  }
};
