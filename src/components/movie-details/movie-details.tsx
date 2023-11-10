import React from 'react';
import './style.css';
import { useAppSelector } from '../../hooks/hooks';
import MoviesList from '../movies-list/movies-list';

const MovieDetails = () => {
  const movie = useAppSelector((state) => state.singleMovieReducer.movie);

  return (
    <>
      <div className='movie-details'>
        <div className='movie-details-container'>
          <div className='movie-details-content'>
            <h2 className='movie-more-details'>More Details</h2>
            <div className='more-details'>
              <div className='movie-info-details'>
                <h5>Home Page</h5>
                <div className='movie-details-block'>
                  <a href={movie.homepage}>Check Home Page</a>
                </div>
              </div>
              <div className='movie-info-details'>
                <h5>Genres</h5>
                <div className='movie-details-block'>
                  {movie.genres?.map((genre) => (
                    <div key={genre.id} className='genre'>
                      {genre.name}
                    </div>
                  ))}
                </div>
              </div>
              <div className='movie-info-details'>
                <h5>Release Data</h5>
                <div className='movie-details-block'>{movie.release_date}</div>
              </div>
              <div className='movie-info-details'>
                <h5>Tag Line</h5>
                <div className='movie-details-block'>{movie.tagline}</div>
              </div>
              <div className='movie-info-details'>
                <h5>Vote Average</h5>
                <div className='movie-details-block'>
                  <span className='vote'>{movie.vote_average?.toFixed()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MoviesList />
    </>
  );
};

export default MovieDetails;
