import React from 'react';
import { StylesBalance } from '../styled-components/balance-styles/balance-styles';
import { useAppSelector } from '../../hooks/hooks';

const Balance = () => {
  const currentUser = useAppSelector((state) => state.authReducer.currentUser);

  return <StylesBalance></StylesBalance>;
};

export default Balance;
