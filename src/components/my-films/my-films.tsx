import React from 'react';
import {
  StylesAccountAmount,
  StylesAccountAmountWrapper,
  StylesMyFilm,
  StylesMyFilmImage,
  StylesMyFilmSellButton,
  StylesMyFilms,
  StylesMyFilmsContainer,
  StylesMyFilmsTitle,
} from '../styled-components/my-films-styles/my-films-styles';
import { useAppSelector } from '../../hooks/hooks';
import { imagesUrl } from '../../services';
import { sellMovie } from './my-films-services';
import { useDispatch } from 'react-redux';

const MyFilms = () => {
  const cartMovies = useAppSelector((state) => state.moviesReducer.cartMovies);
  const currentUserAmount = useAppSelector(
    (state) => state.authReducer.currentUser
  );
  const dispatch = useDispatch();
  return (
    <StylesMyFilms>
      <StylesAccountAmount>{currentUserAmount?.amount} $</StylesAccountAmount>
      <StylesMyFilmsContainer>
        {cartMovies.map((movie) => (
          <StylesMyFilm key={movie.id}>
            <StylesMyFilmImage src={`${imagesUrl}${movie.poster_path}`} />
            <StylesMyFilmsTitle>
              {movie.title}
              <StylesMyFilmSellButton
                onClick={() => sellMovie(movie.id, dispatch)}
              >
                Sell
              </StylesMyFilmSellButton>
            </StylesMyFilmsTitle>
          </StylesMyFilm>
        ))}
      </StylesMyFilmsContainer>
    </StylesMyFilms>
  );
};

export default MyFilms;
