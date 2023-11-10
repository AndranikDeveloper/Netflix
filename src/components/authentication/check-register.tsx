import React from 'react';
import { Link } from 'react-router-dom';
import { CheckRegisterProps } from '../../types/register-check-types';
import './style.css';

const CheckRegister = ({ isRegister }: CheckRegisterProps) => {
  return (
    <div>
      {!isRegister ? (
        <div className='auth-register'>
          <div className='auth-text'>
            <span className='register-text'>
              First Time in Netflix?
              <Link to='/register' className='sign-up-text'>
                Sign up now
              </Link>
            </span>
          </div>
        </div>
      ) : (
        <div className='register-block'>
          <div className='auth-register'>
            <div className='auth-text'>
              <span className='register-text'>
                I'am already Sign up
                <Link to='/auth' className='sign-up-text log-in'>
                  Log in
                </Link>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckRegister;
