import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import Movie from './components/movie/movie';
import Authentication from './components/authentication/authentication';
import {
  handleSubmitRegister,
  handleSubmitSignIn,
} from './components/authentication/auth-services';
import { useAppSelector } from './hooks/hooks';
import MyFilms from './components/my-films/my-films';

function App() {
  const { users } = useAppSelector((state) => state.authReducer);
  console.log(users);
  return (
    <div className='App'>
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
      </Routes>
    </div>
  );
}

export default App;
