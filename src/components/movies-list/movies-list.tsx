import React from 'react';
import './style.css';
import { useAppSelector } from '../../hooks/hooks';
import { navigateToMovie } from '../main/main-servies';
import { useNavigate } from 'react-router-dom';

const MoviesList = () => {
  const movies = useAppSelector((state) => state.moviesReducer.movies);
  const navigate = useNavigate();
  const fewMovies = movies.slice(0, 15);

  return (
    <div className='movies-list'>
      <div className='movies-list-container'>
        {fewMovies.map((movie) => (
          <div key={movie.id} className='movie-list-item'>
            <img
              className='movies-list-image'
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
              onClick={() => navigateToMovie(movie.id, navigate)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
