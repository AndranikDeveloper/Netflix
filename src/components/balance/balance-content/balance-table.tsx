import {
  StylesBalanceBlockTable,
  StylesBalanceTableBought,
  StylesBalanceTableContent,
  StylesBalanceTableHeader,
  StylesBalanceTableSold,
} from '../../styled-components/balance-styles/balance-styles';
import { makeActive } from './balance-services';
import { useAppSelector } from '../../../hooks/hooks';
import Transaction from '../../transaction/transaction';
import { BalanceTableProps } from '../../../types/balance-types';

const BalanceTable = ({
  activeBought,
  activeSold,
  setActiveBought,
  setActiveSold,
}: BalanceTableProps) => {
  const currentUser = useAppSelector((state) => state.authReducer.currentUser);
  const boughtHistory = currentUser?.transaction?.filter(
    (movie) => movie.type === 'bought'
  );
  const soldHistory = currentUser?.transaction?.filter(
    (movie) => movie.type === 'sold'
  );

  return (
    <StylesBalanceBlockTable>
      <StylesBalanceTableHeader>
        <StylesBalanceTableBought
          activeBought={activeBought}
          onClick={() => makeActive(setActiveBought, setActiveSold)}
        >
          Bought
        </StylesBalanceTableBought>
        <StylesBalanceTableSold
          activeSold={activeSold}
          onClick={() => makeActive(setActiveSold, setActiveBought)}
        >
          Sold
        </StylesBalanceTableSold>
      </StylesBalanceTableHeader>
      <StylesBalanceTableContent>
        {activeBought ? (
          <Transaction
            boughtHistory={boughtHistory}
            activeBought={activeBought}
            activeSold={activeSold}
          />
        ) : (
          <Transaction
            soldHistory={soldHistory}
            activeBought={activeBought}
            activeSold={activeSold}
          />
        )}
      </StylesBalanceTableContent>
    </StylesBalanceBlockTable>
  );
};

export default BalanceTable;
