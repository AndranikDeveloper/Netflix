import { NavigateFunction } from 'react-router-dom';
import { requests } from '../../services';
import { AppDispatch } from '../../store/store';
import {
  comedyMoviesApi,
  comedyMoviesSecondPageApi,
  fantasyMoviesApi,
  fantasyMoviesSecondPageApi,
  horrorMoviesApi,
  horrorMoviesSecondPageApi,
  popularMoviesApi,
  popularMoviesSecondPageApi,
  topRatedMoviesApi,
  topRatedMoviesSecondPageApi,
  upComingMoviesApi,
  upComingMoviesSecondPageApi,
} from '../../store/store-services';

export function callRequests(dispatch: AppDispatch) {
  dispatch(popularMoviesApi(requests.requestPopular));
  dispatch(topRatedMoviesApi(requests.requestTopRated));
  dispatch(upComingMoviesApi(requests.requestUpComing));
  dispatch(popularMoviesSecondPageApi(requests.requestPopularSecondPage));
  dispatch(topRatedMoviesSecondPageApi(requests.requestTopRatedSecondPage));
  dispatch(upComingMoviesSecondPageApi(requests.requestUpComingSecondPage));
  dispatch(horrorMoviesApi(requests.requestHorror));
  dispatch(fantasyMoviesApi(requests.requestFantasy));
  dispatch(comedyMoviesApi(requests.requestComedy));
  dispatch(horrorMoviesSecondPageApi(requests.requestHorrorSecondPage));
  dispatch(fantasyMoviesSecondPageApi(requests.requestFantasySecondPage));
  dispatch(comedyMoviesSecondPageApi(requests.requestComedySecondPage));
}

export function navigateToMovie(id: number, navigate: NavigateFunction) {
  navigate(`/movie/${id}`);
}
