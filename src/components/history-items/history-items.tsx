import React from 'react';
import {
  StylesHistoryArrowDown,
  StylesHistoryArrowUp,
  StylesHistoryIcon,
  StylesHistoryItem,
  StylesHistoryItems,
  StylesHistoryLeftSide,
  StylesHistoryRightDate,
  StylesHistoryRightMovie,
  StylesHistoryRightSide,
  StylesHistoryTransaction,
  StylesHistoryType,
} from '../styled-components/history-items-styles/history-items-styles';
import { HistoryItemsProps } from '../../types/transaction-types';
import { totalDate, totalTime } from './history-services';

const HistoryItems = ({ historyTransaction }: HistoryItemsProps) => {
  return (
    <StylesHistoryItems>
      <StylesHistoryTransaction>
        {historyTransaction?.map((movie) => (
          <StylesHistoryItem>
            <StylesHistoryLeftSide>
              <StylesHistoryIcon>
                {movie.type === 'bought' ? (
                  <StylesHistoryArrowUp />
                ) : (
                  <StylesHistoryArrowDown />
                )}
              </StylesHistoryIcon>
              <StylesHistoryType>{movie.type}</StylesHistoryType>
            </StylesHistoryLeftSide>
            <StylesHistoryRightSide>
              <StylesHistoryRightMovie>
                <h2>Movie: </h2> <h4>{movie.name}</h4>
              </StylesHistoryRightMovie>
              <StylesHistoryRightDate>
                {totalDate} -- {totalTime}
              </StylesHistoryRightDate>
            </StylesHistoryRightSide>
          </StylesHistoryItem>
        ))}
      </StylesHistoryTransaction>
    </StylesHistoryItems>
  );
};

export default HistoryItems;
