export type InitialStateTypes = {
  movies: Movie[];
  cartMovies: Movie[];
  error: string | any;
  isLoading: boolean;
  count: number;
  popularMovies: Movie[];
  topRatedMovies: Movie[];
  upComingMovies: Movie[];
  horrorMovies: Movie[];
  fantasyMovies: Movie[];
  comedyMovies: Movie[];
  searchValue: string;
};

export type Movie = {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  dates?: {
    maximum: string;
    minimum: string;
  };
};

export type CardsType = {
  movieList: Movie[];
  category: string;
};

export type SingleMovie = {
  backdrop_path: string;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  status: string;
  title: string;
  tagline: string;
  vote_average: number;
};

export type MovieSlice = {
  movie: Partial<SingleMovie>;
  error: string;
  isLoading: boolean;
  results: { key: string }[];
};

export type UserInfo = {
  id: number;
  email: string;
  password: string;
  amount?: number;
};

export type CurrentUser = {
  id: number;
  email: string;
  password: string;
  amount: number;
  transaction: { name: string; date: number; type: string; id: number }[];
};

export type AuthInitialState = {
  users: UserInfo[];
  currentUser: CurrentUser | null;
  quizItems: QuizItems[];
  randomObject: null | RandomObjectType;
  guessedCount: number;
  randomItems: { id: number; title: string }[];
  attemptCount: number;
};

export type RandomObjectType = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
};

export type QuizItems = {
  id: number;
  movieNames: string;
  correctMovieName: string;
  movieImage: string;
};

export type MovieVideoResponse = {
  results: { key: string }[];
};
