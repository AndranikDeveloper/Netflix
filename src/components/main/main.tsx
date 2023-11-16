import React, { useEffect } from 'react';
import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';
import { categoryName } from '../../services';
import Cards from '../cards/cards';
import { callRequests } from './main-servies';
import FilteredMovies from './filtered-movies';
import { useData } from '../../hooks/main-component-hooks';
import {
  FilteredMoviesTag,
  MainContainerTag,
  MainMoviesTextTag,
  MainTag,
  MainTextTag,
} from '../styled-components/main-styles/main-styles';

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
    <MainTag className='main'>
      <MainContainerTag>
        <MainTextTag className='main-text'>
          <h1>Movies</h1>
          <MainMoviesTextTag>
            Movies move us like nothing else can, whether they’re scary, funny,{' '}
            <br />
            dramatic, romantic or anywhere in-between. So many titles, so much{' '}
            <br />
            to experience.
          </MainMoviesTextTag>
        </MainTextTag>
        {debounceValue?.length > 0 ? (
          <FilteredMoviesTag>
            <FilteredMovies debounceValue={debounceValue} />
          </FilteredMoviesTag>
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
      </MainContainerTag>
    </MainTag>
  );
};

export default Main;
