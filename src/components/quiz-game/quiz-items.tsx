import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import {
  StylesQuizItems,
  StylesQuizQuestionsBlock,
} from '../styled-components/quiz-styles/quiz-styles';
import { compareMovie } from './quiz-service';
import { useDispatch } from 'react-redux';
import { QuizItemsProps } from '../../types/quiz-types';

const QuizItems = ({ setIsEnd }: QuizItemsProps) => {
  const { attemptCount, randomItems, randomObject, guessedCount } =
    useAppSelector((state) => state.authReducer);
  const movies = useAppSelector((state) => state.moviesReducer.movies);
  const dispatch = useDispatch();

  function compareMovieProps(title: string) {
    compareMovie(
      title,
      randomObject,
      dispatch,
      movies,
      setIsEnd,
      attemptCount,
      guessedCount
    );
  }

  return (
    <StylesQuizItems>
      {randomItems?.map((item) => (
        <StylesQuizQuestionsBlock onClick={() => compareMovieProps(item.title)}>
          {item?.title}
        </StylesQuizQuestionsBlock>
      ))}
    </StylesQuizItems>
  );
};

export default QuizItems;
