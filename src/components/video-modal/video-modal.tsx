import React, { useEffect } from 'react';
import {
  StylesVideo,
  StylesVideoModal,
  StylesVideoModalBackground,
  StylesVideoModalContent,
} from '../styled-components/video-modal-styles/video-modal-styles';
import { ModalVideoProps } from '../../types/movie-video-types';
import { api_key } from '../../services';
import { useDispatch } from 'react-redux';
import { getMovieVideo } from '../../store/store-services';
import { AppDispatch } from '../../store/store';
import { useAppSelector } from '../../hooks/hooks';
import { toggleModal } from '../movie-video/movie-video-services';

const VideoModal = ({ id, setIsModal }: ModalVideoProps) => {
  const url = `https://www.youtube.com/watch?v=`;
  const movieVideoApi = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}`;
  const dispatch = useDispatch<AppDispatch>();
  const videoKey = useAppSelector((state) => state.singleMovieReducer.results);
  useEffect(() => {
    dispatch(getMovieVideo(movieVideoApi));
  }, [dispatch, id, movieVideoApi]);

  return (
    <StylesVideoModal>
      <StylesVideoModalBackground onClick={() => toggleModal(setIsModal)}>
        <StylesVideoModalContent>
          <StylesVideo controls={true} url={`${url}${videoKey[0]?.key}`} />
        </StylesVideoModalContent>
      </StylesVideoModalBackground>
    </StylesVideoModal>
  );
};

export default VideoModal;
