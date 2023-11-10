export const api_key = `da39dc5c51e5025a619cd0bc8e6762f1`;
export const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1&include_image_language`,
  requestPopularSecondPage: `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=4&include_image_language`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1&include_image_language`,
  requestTopRatedSecondPage: `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=4&include_image_language`,
  requestUpComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1&include_image_language`,
  requestUpComingSecondPage: `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=4&include_image_language`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=horror&page=1&include_image_language`,
  requestFamily: `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=family&page=1&include_image_language`,
  requestComedy: `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=comedy&page=1&include_image_language`,
  requestFantasy: `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=fantasy&page=1&include_image_language`,
  requestHorrorSecondPage: `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=horror&page=2&include_image_language`,
  requestFamilySecondPage: `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=family&page=2&include_image_language`,
  requestComedySecondPage: `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=comedy&page=2&include_image_language`,
  requestFantasySecondPage: `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=fantasy&page=2&include_image_language`,
};
export const categoryName = {
  popular: 'The Popular',
  topRated: 'The Top Rated',
  upComing: 'The Up Coming',
  horror: 'The Horror',
  fantasy: 'The Fantasy',
  comedy: 'The Comedy',
};
