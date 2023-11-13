import React, { useState } from 'react';
import {
  StylesMoviePrice,
  StylesMovieVideo,
  StylesMovieVideoContainer,
  StylesMovieVideoContent,
  StylesMovieVideoLeftSide,
  StylesMovieVideoLeftSideImage,
  StylesMovieVideoPriceButton,
  StylesMovieVideoRightSide,
  StylesMovieVideoRightSideButton,
} from '../styled-components/movie-video-styles/movie-video-styles';
import netflixIcon from '../../assets/netflix_logo_icon_170919.png';
import { addToMyFilms, openVideo, priceOfMovie } from './movie-video-services';
import { MovieVideoProps } from '../../types/movie-video-types';
import VideoModal from '../video-modal/video-modal';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/hooks';

const MovieVideo = ({ id, movie }: MovieVideoProps) => {
  const [isModal, setIsModal] = useState(false);
  const movieCart = useAppSelector((state) => state.moviesReducer.cartMovies);
  const currentUser = useAppSelector((state) => state.authReducer.currentUser);
  const dispatch = useDispatch();

  const findMovie = movieCart.findIndex((m) => m.id === movie.id);

  return (
    <StylesMovieVideo>
      <StylesMovieVideoContainer>
        <StylesMovieVideoContent>
          <StylesMovieVideoLeftSide>
            <StylesMovieVideoLeftSideImage src={netflixIcon} />
            <StylesMoviePrice>
              {findMovie !== -1
                ? 'The Movie Already Bought'
                : priceOfMovie + ' $'}
            </StylesMoviePrice>
          </StylesMovieVideoLeftSide>
          <StylesMovieVideoRightSide>
            <StylesMovieVideoRightSideButton
              onClick={() => openVideo(setIsModal)}
            >
              Play Video
            </StylesMovieVideoRightSideButton>
            {findMovie !== -1 ? (
              ''
            ) : (
              <StylesMovieVideoPriceButton
                onClick={() => addToMyFilms(movie, dispatch, currentUser)}
              >
                Add To My Films
              </StylesMovieVideoPriceButton>
            )}
          </StylesMovieVideoRightSide>
        </StylesMovieVideoContent>
      </StylesMovieVideoContainer>
      {isModal && <VideoModal id={id} setIsModal={setIsModal} />}
    </StylesMovieVideo>
  );
};

export default MovieVideo;
