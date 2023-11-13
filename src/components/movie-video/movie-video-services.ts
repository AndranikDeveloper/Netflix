import { buyMovie } from '../../store/authSlice';
import { addToCart } from '../../store/moviesSlice';
import { AppDispatch } from '../../store/store';
import { CurrentUser, SingleMovie } from '../../types/store-types';

export function toggleModal(setIsModal: (value: boolean) => void) {
  setIsModal(false);
}
export function openVideo(setIsModal: (value: boolean) => void) {
  setIsModal(true);
}

export const priceOfMovie = 5;

export function addToMyFilms(
  movie: Partial<SingleMovie>,
  dispatch: AppDispatch,
  currentUser: CurrentUser | null
) {
  if (currentUser && currentUser.amount > priceOfMovie) {
    dispatch(addToCart(movie));
    dispatch(buyMovie(priceOfMovie));
  } else if (currentUser && currentUser.amount < priceOfMovie) {
    alert("You Don't have Enough Money for this");
  }
}
