import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { getRandomMovies, getRandomObject } from './quiz-service';
import { setRandomItems, setRandomObject } from '../../store/authSlice';
import {
  StylesQuiz,
  StylesQuizBackground,
  StylesQuizBlock,
  StylesQuizBlockH1,
  StylesQuizContent,
  StylesQuizEnd,
  StylesQuizEndCount,
  StylesQuizEndText,
  StylesQuizOverview,
  StylesQuizOverviewSide,
  StylesQuizQuestionsSide,
} from '../styled-components/quiz-styles/quiz-styles';
import { QuizProps } from '../../types/quiz-types';
import QuizItems from './quiz-items';
import { toggleQuiz } from '../balance/balance-content/balance-services';

const Quiz = ({ setIsQuiz }: QuizProps) => {
  const [isEnd, setIsEnd] = useState(false);

  const movies = useAppSelector((state) => state.moviesReducer.movies);
  const dispatch = useDispatch<AppDispatch>();
  const { randomObject, guessedCount, attemptCount } = useAppSelector(
    (state) => state.authReducer
  );

  useEffect(() => {
    const object = getRandomObject(movies);
    dispatch(setRandomObject(object));
    const chooseItems = getRandomMovies(movies, object);
    console.log(chooseItems);
    dispatch(setRandomItems(chooseItems));
  }, [dispatch, movies, attemptCount]);

  const earnedMoney = guessedCount * 5;

  return (
    <StylesQuiz>
      <StylesQuizBackground
        onClick={() => toggleQuiz(setIsQuiz, dispatch)}
      ></StylesQuizBackground>
      <StylesQuizBlock>
        <StylesQuizBlockH1>Guess Movie Name</StylesQuizBlockH1>
        <StylesQuizContent>
          {isEnd ? (
            <StylesQuizEnd>
              <StylesQuizEndCount>{guessedCount}</StylesQuizEndCount>
              <StylesQuizEndText>You Earned {earnedMoney}</StylesQuizEndText>
            </StylesQuizEnd>
          ) : (
            <>
              <StylesQuizOverviewSide>
                <StylesQuizOverview>
                  {randomObject?.overview}
                </StylesQuizOverview>
              </StylesQuizOverviewSide>
              <StylesQuizQuestionsSide>
                <QuizItems setIsEnd={setIsEnd} />
              </StylesQuizQuestionsSide>
            </>
          )}
        </StylesQuizContent>
      </StylesQuizBlock>
    </StylesQuiz>
  );
};

export default Quiz;
