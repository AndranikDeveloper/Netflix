import { sellUserMovie } from '../../store/authSlice';
import { deleteFromCart } from '../../store/moviesSlice';
import { AppDispatch } from '../../store/store';
import { priceOfMovie } from '../movie-video/movie-video-services';

export function sellMovie(
  id: number,
  dispatch: AppDispatch,
  movieName: string
) {
  dispatch(deleteFromCart(id));
  dispatch(
    sellUserMovie({
      price: priceOfMovie,
      id: Date.now(),
      date: Date.now(),
      name: movieName,
      type: 'sold',
    })
  );
}
