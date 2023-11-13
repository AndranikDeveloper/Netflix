import React from 'react';
// import './style.css';
import { useAppSelector } from '../../hooks/hooks';
import MoviesList from '../movies-list/movies-list';
import {
  MoreDetailsTag,
  MovieDetailsBlockTag,
  MovieDetailsContainer,
  MovieDetailsContentTag,
  MovieDetailsTag,
  MovieInfoDetailsTag,
  MovieMoreDetailsH2Tag,
} from '../styled-components/movie-details/movie-details-styles';

const MovieDetails = () => {
  const movie = useAppSelector((state) => state.singleMovieReducer.movie);

  return (
    <>
      <MovieDetailsTag>
        <MovieDetailsContainer>
          <MovieDetailsContentTag className='movie-details-content'>
            <MovieMoreDetailsH2Tag>More Details</MovieMoreDetailsH2Tag>
            <MoreDetailsTag className='more-details'>
              <MovieInfoDetailsTag>
                <h5>Home Page</h5>
                <MovieDetailsBlockTag>
                  <a href={movie.homepage}>Check Home Page</a>
                </MovieDetailsBlockTag>
              </MovieInfoDetailsTag>
              <MovieInfoDetailsTag>
                <h5>Genres</h5>
                <MovieDetailsBlockTag>
                  {movie.genres?.map((genre) => (
                    <div key={genre.id} className='genre'>
                      {genre.name}
                    </div>
                  ))}
                </MovieDetailsBlockTag>
              </MovieInfoDetailsTag>
              <MovieInfoDetailsTag>
                <h5>Release Data</h5>
                <MovieDetailsBlockTag>
                  {movie.release_date}
                </MovieDetailsBlockTag>
              </MovieInfoDetailsTag>
              <MovieInfoDetailsTag>
                <h5>Tag Line</h5>
                <MovieDetailsBlockTag>{movie.tagline}</MovieDetailsBlockTag>
              </MovieInfoDetailsTag>
              <MovieInfoDetailsTag>
                <h5>Vote Average</h5>
                <MovieDetailsBlockTag>
                  <span className='vote'>{movie.vote_average?.toFixed()}</span>
                </MovieDetailsBlockTag>
              </MovieInfoDetailsTag>
            </MoreDetailsTag>
          </MovieDetailsContentTag>
        </MovieDetailsContainer>
      </MovieDetailsTag>
      <MoviesList />
    </>
  );
};

export default MovieDetails;
