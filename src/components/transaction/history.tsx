import React from 'react';
import { StylesHistory } from '../styled-components/transaction-styles/transaction-styles';
import { TransactionProps } from '../../types/transaction-types';
import HistoryItems from '../history-items/history-items';

const History = ({
  boughtHistory,
  soldHistory,
  activeBought,
  activeSold,
}: TransactionProps) => {
  return (
    <StylesHistory>
      {activeBought &&
        boughtHistory?.map((movie) => (
          <HistoryItems historyTransaction={boughtHistory} />
        ))}
      {activeSold && <HistoryItems historyTransaction={soldHistory} />}
    </StylesHistory>
  );
};

export default History;
