import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Pagination, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { CardsType } from '../../types/store-types';
import { useNavigate } from 'react-router-dom';
import { navigateToMovie } from '../main/main-servies';
import {
  CardsContainerTag,
  CardsContentTag,
  CardsTag,
  CategoryNameTag,
  MovieBlockTag,
  MovieImageTag,
  MovieNameTag,
} from '../styled-components/cards-styles/cards-style';

const Cards = ({ movieList, category }: CardsType) => {
  const navigate = useNavigate();
  return (
    <CardsTag>
      <CardsContainerTag>
        <CardsContentTag>
          <CategoryNameTag>
            <h4>{category?.toUpperCase()} Movies</h4>
          </CategoryNameTag>
          <Swiper
            slidesPerView={7}
            modules={[Navigation, A11y, Pagination, Scrollbar]}
            navigation
          >
            {movieList?.map((movie) => (
              <SwiperSlide>
                <MovieBlockTag
                  onClick={() => navigateToMovie(movie.id, navigate)}
                >
                  <MovieImageTag
                    className='movie-image'
                    src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                    alt={movie?.title}
                  />
                  <MovieNameTag>{movie?.title}</MovieNameTag>
                </MovieBlockTag>
              </SwiperSlide>
            ))}
          </Swiper>
        </CardsContentTag>
      </CardsContainerTag>
    </CardsTag>
  );
};

export default Cards;
