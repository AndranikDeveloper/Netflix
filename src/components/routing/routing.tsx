import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Movie from '../movie/movie';
import Authentication from '../authentication/authentication';
import {
  handleSubmitRegister,
  handleSubmitSignIn,
} from '../authentication/auth-services';
import MyFilms from '../my-films/my-films';
import Balance from '../balance/balance';
import FirstPage from '../first-page/first-page';
import { StylesRouting } from '../styled-components/routing-styles/rounting-balance-styles';

const Routing = () => {
  return (
    <StylesRouting>
      <Routes>
        <Route path='/' element={<FirstPage />} />
        <Route path='/movie/:id' element={<Movie />} />
        <Route
          path='/auth'
          element={
            <Authentication
              handleLogIn={handleSubmitSignIn}
              signName='Sign in'
              isRegister={false}
            />
          }
        />
        <Route
          path='/register'
          element={
            <Authentication
              signName='Sign up'
              isRegister={true}
              handleLogIn={handleSubmitRegister}
            />
          }
        />
        <Route path='/my-films' element={<MyFilms />} />
        <Route path='/balance' element={<Balance />} />
      </Routes>
    </StylesRouting>
  );
};

export default Routing;
