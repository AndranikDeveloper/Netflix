import { sellMovieAmount } from '../../store/authSlice';
import { deleteFromCart } from '../../store/moviesSlice';
import { AppDispatch } from '../../store/store';
import { priceOfMovie } from '../movie-video/movie-video-services';

export function sellMovie(id: number, dispatch: AppDispatch) {
  dispatch(deleteFromCart(id));
  dispatch(sellMovieAmount(priceOfMovie));
}
