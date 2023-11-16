import {
  StylesTransaction,
  StylesTransactionBlock,
  StylesTransactionH1,
} from '../styled-components/transaction-styles/transaction-styles';
import { TransactionProps } from '../../types/transaction-types';
import History from './history';

const Transaction = ({
  boughtHistory,
  soldHistory,
  activeBought,
  activeSold,
}: TransactionProps) => {
  return (
    <StylesTransaction>
      <StylesTransactionBlock>
        {!activeBought && !activeSold && (
          <StylesTransactionH1>Their is no any history</StylesTransactionH1>
        )}
        <History
          boughtHistory={boughtHistory}
          soldHistory={soldHistory}
          activeBought={activeBought}
          activeSold={activeSold}
        />
      </StylesTransactionBlock>
    </StylesTransaction>
  );
};

export default Transaction;
