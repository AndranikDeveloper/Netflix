import React from 'react';
import {
  StylesBalance,
  StylesBalanceContainer,
} from '../styled-components/balance-styles/balance-styles';
import BalanceContent from './balance-content/balance-content';

const Balance = () => {
  return (
    <StylesBalance>
      <StylesBalanceContainer>
        <BalanceContent />
      </StylesBalanceContainer>
    </StylesBalance>
  );
};

export default Balance;
