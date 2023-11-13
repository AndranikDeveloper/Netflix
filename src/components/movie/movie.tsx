import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api_key, imagesUrl } from '../../services';
import { useDispatch } from 'react-redux';
import { getMovie } from '../../store/store-services';
import { AppDispatch } from '../../store/store';
import { useAppSelector } from '../../hooks/hooks';
import MovieJoinBlock from './movie-block';
import MovieDetails from '../movie-details/movie-details';
import {
  MovieInfoContainerTag,
  MovieInfoContentTag,
  MovieInfoTag,
  MovieMainBlockTag,
  MovieOverviewTag,
  MovieTitleTag,
  StylesMovieMainUserAmount,
} from '../styled-components/movie-styles/movie-styles';
import MovieVideo from '../movie-video/movie-video';

const Movie = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`;
  const movie = useAppSelector((state) => state.singleMovieReducer.movie);
  const currentUser = useAppSelector((state) => state.authReducer.currentUser);

  const imageUrl = `${imagesUrl}${
    !movie?.backdrop_path ? movie.poster_path : movie?.backdrop_path
  }`;

  useEffect(() => {
    dispatch(getMovie(url));
  }, [dispatch, id, url]);

  return (
    <MovieMainBlockTag>
      <StylesMovieMainUserAmount>
        {currentUser?.amount} $
      </StylesMovieMainUserAmount>
      <MovieInfoTag className='movie-info'>
        <MovieInfoContainerTag imageUrl={imageUrl}>
          <MovieInfoContentTag className='movie-info-content'>
            <MovieTitleTag className='movie-title'>{movie.title}</MovieTitleTag>
            <MovieOverviewTag className='movie-overview'>
              {movie.overview}
            </MovieOverviewTag>
          </MovieInfoContentTag>
        </MovieInfoContainerTag>
      </MovieInfoTag>
      {currentUser === null ? (
        <MovieJoinBlock />
      ) : (
        <MovieVideo id={id} movie={movie} />
      )}
      <MovieDetails />
    </MovieMainBlockTag>
  );
};

export default Movie;
