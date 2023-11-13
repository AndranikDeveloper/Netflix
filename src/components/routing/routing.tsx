import React from 'react';
import Header from '../header/header';
import { Route, Routes } from 'react-router-dom';
import Main from '../main/main';
import Movie from '../movie/movie';
import Authentication from '../authentication/authentication';
import {
  handleSubmitRegister,
  handleSubmitSignIn,
} from '../authentication/auth-services';
import MyFilms from '../my-films/my-films';
import Balance from '../balance/balance';

const Routing = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
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
    </div>
  );
};

export default Routing;
