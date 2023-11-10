import './style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Pagination, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { CardsType } from '../../types/store-types';
import { useNavigate } from 'react-router-dom';
import { navigateToMovie } from '../main/main-servies';

const Cards = ({ movieList, category }: CardsType) => {
  const navigate = useNavigate();
  return (
    <div className='cards'>
      <div className='cards-container'>
        <div className='cards-content'>
          <div className='category-name'>
            <h4>{category?.toUpperCase()} Movies</h4>
          </div>
          <Swiper
            slidesPerView={7}
            modules={[Navigation, A11y, Pagination, Scrollbar]}
            navigation
          >
            {movieList?.map((movie) => (
              <SwiperSlide>
                <div
                  className='movie-block'
                  onClick={() => navigateToMovie(movie.id, navigate)}
                >
                  <img
                    className='movie-image'
                    src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                    alt={movie?.title}
                  />
                  <h5 className='movie-name'>{movie?.title}</h5>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Cards;
