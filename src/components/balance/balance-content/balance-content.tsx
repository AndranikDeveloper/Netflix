import {
  StylesBalanceBack,
  StylesBalanceBackIcon,
  StylesBalanceBlock,
  StylesBalanceBlockH1,
  StylesBalanceContent,
  StylesBalanceHeader,
  StylesBalanceMain,
  StylesBalanceUser,
  StylesBalanceUserIcon,
} from '../../styled-components/balance-styles/balance-styles';
import { useAppSelector } from '../../../hooks/hooks';
import { useNavigate } from 'react-router-dom';
import BalanceTable from './balance-table';
import { useState } from 'react';
import { navigateToMain } from './balance-services';

const BalanceContent = () => {
  const [activeBought, setActiveBought] = useState(false);
  const [activeSold, setActiveSold] = useState(false);
  const currentUser = useAppSelector((state) => state.authReducer.currentUser);
  const navigate = useNavigate();
  return (
    <StylesBalanceContent>
      <StylesBalanceHeader>
        <StylesBalanceUser>
          {currentUser?.email}
          <StylesBalanceUserIcon />
        </StylesBalanceUser>
        <StylesBalanceBack>
          <StylesBalanceBackIcon onClick={() => navigateToMain(navigate)} />
        </StylesBalanceBack>
      </StylesBalanceHeader>
      <StylesBalanceMain>
        <StylesBalanceBlock>
          <StylesBalanceBlockH1>Transaction History</StylesBalanceBlockH1>
          <BalanceTable
            activeBought={activeBought}
            activeSold={activeSold}
            setActiveBought={setActiveBought}
            setActiveSold={setActiveSold}
          />
        </StylesBalanceBlock>
      </StylesBalanceMain>
    </StylesBalanceContent>
  );
};

export default BalanceContent;
