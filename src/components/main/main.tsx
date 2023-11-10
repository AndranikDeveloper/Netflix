import React, { useEffect, useMemo, useState } from 'react';
import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';
import { categoryName } from '../../services';
import Cards from '../cards/cards';
import { callRequests } from './main-servies';
import './style.css';
import FilteredMovies from './filtered-movies';
import { useData } from '../../hooks/main-component-hooks';

const Main = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    comedyMovies,
    debounceValue,
    fantasyMovies,
    horrorMovies,
    popularMovies,
    topRatedMovies,
    upComingMovies,
  } = useData();

  useEffect(() => {
    callRequests(dispatch);
  }, [dispatch]);

  return (
    <main className='main'>
      <div className='main-container'>
        <div className='main-text'>
          <h1>Movies</h1>
          <div className='main-movies-text'>
            Movies move us like nothing else can, whether they’re scary, funny,{' '}
            <br />
            dramatic, romantic or anywhere in-between. So many titles, so much{' '}
            <br />
            to experience.
          </div>
        </div>
        {debounceValue.length > 0 ? (
          <div className='filtered-movies'>
            <FilteredMovies debounceValue={debounceValue} />
          </div>
        ) : (
          <>
            <Cards movieList={popularMovies} category={categoryName.popular} />
            <Cards
              movieList={topRatedMovies}
              category={categoryName.topRated}
            />
            <Cards
              movieList={upComingMovies}
              category={categoryName.upComing}
            />
            <Cards movieList={comedyMovies} category={categoryName.comedy} />
            <Cards movieList={horrorMovies} category={categoryName.horror} />
            <Cards movieList={fantasyMovies} category={categoryName.fantasy} />
          </>
        )}
      </div>
    </main>
  );
};

export default Main;
