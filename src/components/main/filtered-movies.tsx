import React from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { FilteredMoviesProps } from '../../types/filtered-movies-types';
import './style.css';
import { navigateToMovie } from './main-servies';
import { useNavigate } from 'react-router-dom';

const FilteredMovies = ({ debounceValue }: FilteredMoviesProps) => {
  const { movies } = useAppSelector((state) => state.moviesReducer);
  const navigate = useNavigate();
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLocaleLowerCase().includes(debounceValue)
  );
  return (
    <div className='filtered'>
      {filteredMovies.map((movie) => (
        <div
          key={movie.id}
          className='found-movie'
          id='found-movie'
          onClick={() => navigateToMovie(movie.id, navigate)}
        >
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.original_title}
            className='movie-image'
          />
          <div className='found-movie-name'>{movie.title}</div>
        </div>
      ))}
    </div>
  );
};

export default FilteredMovies;
