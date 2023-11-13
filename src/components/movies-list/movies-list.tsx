import React from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { navigateToMovie } from '../main/main-servies';
import { useNavigate } from 'react-router-dom';
import {
  MoviesListContainerTag,
  MoviesListImageTag,
  MoviesListItemTag,
  MoviesListTag,
} from '../styled-components/movies-list/movies-list';

const MoviesList = () => {
  const movies = useAppSelector((state) => state.moviesReducer.movies);
  const navigate = useNavigate();
  const fewMovies = movies.slice(0, 15);

  return (
    <MoviesListTag>
      <MoviesListContainerTag>
        {fewMovies.map((movie) => (
          <MoviesListItemTag key={movie.id}>
            <MoviesListImageTag
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
              onClick={() => navigateToMovie(movie.id, navigate)}
            />
          </MoviesListItemTag>
        ))}
      </MoviesListContainerTag>
    </MoviesListTag>
  );
};

export default MoviesList;
