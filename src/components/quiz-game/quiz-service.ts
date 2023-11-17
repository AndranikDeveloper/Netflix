import {
  changeUserAmount,
  increaseCount,
  resetAttemptCount,
  setAttemptCount,
  setRandomItems,
  setRandomObject,
} from '../../store/authSlice';
import { AppDispatch } from '../../store/store';
import { Movie, RandomObjectType } from '../../types/store-types';

export function getRandomObject(movies: Movie[]) {
  const randomIndex = Math.floor(Math.random() * movies.length);
  const object = movies[randomIndex];
  return object;
}

export function getRandomMovies(movies: Movie[], object: any) {
  const randomItems = [...movies].sort(() => Math.random() - 0.5);
  const questionItems = randomItems.slice(0, 4);
  const filteredItemsArray = questionItems.filter(
    (item) => item.title !== object.title
  );
  return mixUpArr(filteredItemsArray, object);
}

function mixUpArr(randomMovies: Movie[], object: Movie) {
  const randomIndex = Math.floor(Math.random() * (randomMovies.length + 1));
  randomMovies.splice(randomIndex, 0, object);
  return randomMovies;
}
export function compareMovie(
  title: string,
  rightObject: RandomObjectType | null,
  dispatch: AppDispatch,
  movies: Movie[],
  setIsEnd: React.Dispatch<React.SetStateAction<boolean>>,
  attemptCount: number,
  guessedCount: number
) {
  if (rightObject && rightObject.title === title) {
    dispatch(setAttemptCount());
    dispatch(increaseCount());
    const newMovie = getRandomObject(movies);
    const randomMovie = getRandomMovies(movies, rightObject);
    dispatch(setRandomItems(randomMovie));
    dispatch(setRandomObject(newMovie));
  } else {
    dispatch(setAttemptCount());
    const newMovie = getRandomObject(movies);
    const randomMovie = getRandomMovies(movies, rightObject);
    dispatch(setRandomItems(randomMovie));
    dispatch(setRandomObject(newMovie));
  }
  if (attemptCount === 5) {
    setIsEnd((prev: boolean) => !prev);
    dispatch(resetAttemptCount());
    return getWinCount(guessedCount, dispatch);
  }
}

export function getWinCount(guessedCount: number, dispatch: AppDispatch) {
  const winCount = guessedCount * 5;
  dispatch(changeUserAmount(winCount));
}
