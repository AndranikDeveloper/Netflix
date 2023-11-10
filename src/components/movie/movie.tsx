import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api_key } from '../../services';
import { useDispatch } from 'react-redux';
import { getMovie } from '../../store/store-services';
import { AppDispatch } from '../../store/store';
import { useAppSelector } from '../../hooks/hooks';
import './style.css';
import MovieJoinBlock from './movie-block';
import MovieDetails from '../movie-details/movie-details';

const Movie = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`;
  const { movie } = useAppSelector((state) => state.singleMovieReducer);
  const { currentUser } = useAppSelector((state) => state.authReducer);

  const imageUrl = `https://image.tmdb.org/t/p/original${
    !movie?.backdrop_path ? movie.poster_path : movie?.backdrop_path
  }`;

  useEffect(() => {
    dispatch(getMovie(url));
  }, [dispatch, id, url]);

  return (
    <div>
      <div className='movie-info'>
        <div
          className='movie-info-container'
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: 'calc(100vh - 103px)',
          }}
        >
          <div className='movie-info-content'>
            <h6 className='movie-title'>{movie.title}</h6>
            <span className='movie-overview'>{movie.overview}</span>
          </div>
        </div>
      </div>
      {currentUser === null && <MovieJoinBlock />}
      <MovieDetails />
    </div>
  );
};

export default Movie;
