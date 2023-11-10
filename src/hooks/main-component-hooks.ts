import { useAppSelector, useDebounce } from './hooks';

export const useData = () => {
  const { topRatedMovies, popularMovies, upComingMovies, searchValue } =
    useAppSelector((state) => state.moviesReducer);
  const { comedyMovies, horrorMovies, fantasyMovies } = useAppSelector(
    (state) => state.categoriesReducer
  );

  const { debounceValue } = useDebounce(searchValue);

  return {
    topRatedMovies,
    popularMovies,
    upComingMovies,
    comedyMovies,
    horrorMovies,
    fantasyMovies,
    debounceValue,
  };
};
