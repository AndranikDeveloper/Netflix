import React, { useState } from 'react';
import './style.css';
import { AuthComponent } from '../../types/auth-component-props';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { useAppSelector } from '../../hooks/hooks';
import CheckRegister from './check-register';
import { useNavigate } from 'react-router-dom';

const Authentication = ({
  signName,
  isRegister,
  handleLogIn,
}: AuthComponent) => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { users, currentUser } = useAppSelector((state) => state.authReducer);

  function handleProps(e: React.FormEvent) {
    handleLogIn(
      e,
      dispatch,
      emailValue,
      passwordValue,
      setEmailMessage,
      setPasswordMessage,
      users,
      currentUser,
      navigate,
      setEmailValue,
      setPasswordValue
    );
  }

  return (
    <div className='authentication'>
      <div className='auth-block'>
        <div className='auth-container'>
          <div className='auth-form'>
            <h4 className='sign-text'>{signName}</h4>
            <form className='auth-form' onSubmit={handleProps}>
              <input
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                type='email'
                placeholder='Enter email'
                id='filled-input'
              />
              <div className='message-status'>
                <h5>{emailMessage}</h5>
              </div>

              <input
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                type='password'
                placeholder='Enter password'
                id='filled-input'
              />
              <div className='message-status'>
                <h5>{passwordMessage}</h5>
              </div>
              <button className='btn sign-btn'>{signName}</button>
            </form>
          </div>

          <CheckRegister isRegister={isRegister} />
        </div>
      </div>
    </div>
  );
};

export default Authentication;
