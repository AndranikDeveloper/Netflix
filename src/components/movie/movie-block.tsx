import React from 'react';
import joinNetflixIcon from '../../assets/netflix_logo_icon_170919.png';
import { toggleLogin } from '../header/header-services';
import { useNavigate } from 'react-router-dom';
import {
  MovieJoinBlockTag,
  MovieJoinContentTag,
  MovieJoinTag,
  MovieLeftBlockTag,
  MovieRightBlockTag,
  NetflixIconJoinTag,
  NetflixIconTextTag,
} from '../styled-components/movie-styles/movie-block-styles/movie-block-styles';
import { HeaderBtnTag } from '../styled-components/header-styles/header-navbar-styles/header-styles';

const MovieJoinBlock = () => {
  const navigate = useNavigate();
  return (
    <MovieJoinTag>
      <MovieJoinBlockTag>
        <MovieJoinContentTag>
          <MovieLeftBlockTag>
            <NetflixIconJoinTag src={joinNetflixIcon} alt='netflix-join-icon' />
            <NetflixIconTextTag className='netflix-icon-text'>
              Watch all You Want!
            </NetflixIconTextTag>
          </MovieLeftBlockTag>
          <MovieRightBlockTag>
            <HeaderBtnTag onClick={() => toggleLogin(navigate)}>
              JOIN NOW
            </HeaderBtnTag>
          </MovieRightBlockTag>
        </MovieJoinContentTag>
      </MovieJoinBlockTag>
    </MovieJoinTag>
  );
};

export default MovieJoinBlock;
