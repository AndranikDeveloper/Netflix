import React from 'react';
import './style.css';
import joinNetflixIcon from '../../assets/netflix_logo_icon_170919.png';
import { toggleLogin } from '../header/header-services';
import { useNavigate } from 'react-router-dom';

const MovieJoinBlock = () => {
  const navigate = useNavigate();
  return (
    <div className='movie-join'>
      <div className='movie-join-block'>
        <div className='movie-join-content'>
          <div className='movie-left-block'>
            <img
              className='netflix-icon-join'
              src={joinNetflixIcon}
              alt='netflix-join-icon'
            />
            <div className='netflix-icon-text'>Watch all You Want!</div>
          </div>
          <div className='movie-right-block'>
            <button
              onClick={() => toggleLogin(navigate)}
              className='header-join-btn header-btn'
            >
              JOIN NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieJoinBlock;
