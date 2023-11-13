import React from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { FilteredMoviesProps } from '../../types/filtered-movies-types';
import { navigateToMovie } from './main-servies';
import { useNavigate } from 'react-router-dom';
import {
  FilteredTag,
  FoundMovieTag,
} from '../styled-components/main-styles/filtered-movies-styles/filtered-styles';
import { MovieImageTag } from '../styled-components/cards-styles/cards-style';
import { FoundMovieNameTag } from '../styled-components/main-styles/main-styles';

const FilteredMovies = ({ debounceValue }: FilteredMoviesProps) => {
  const { movies } = useAppSelector((state) => state.moviesReducer);
  const navigate = useNavigate();
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLocaleLowerCase().includes(debounceValue)
  );
  return (
    <FilteredTag className='filtered'>
      {filteredMovies.map((movie) => (
        <FoundMovieTag
          key={movie.id}
          className='found-movie'
          id='found-movie'
          onClick={() => navigateToMovie(movie.id, navigate)}
        >
          <MovieImageTag
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.original_title}
            className='movie-image'
          />
          <FoundMovieNameTag className='found-movie-name'>
            {movie.title}
          </FoundMovieNameTag>
        </FoundMovieTag>
      ))}
    </FilteredTag>
  );
};

export default FilteredMovies;
