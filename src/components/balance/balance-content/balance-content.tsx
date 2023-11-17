import {
  StylesBalanceBack,
  StylesBalanceBackIcon,
  StylesBalanceBlock,
  StylesBalanceBlockH1,
  StylesBalanceContent,
  StylesBalanceHeader,
  StylesBalanceHeaderBlock,
  StylesBalanceMain,
  StylesBalanceQuizButton,
  StylesBalanceUser,
  StylesBalanceUserAmount,
  StylesBalanceUserIcon,
} from '../../styled-components/balance-styles/balance-styles';
import { useAppSelector } from '../../../hooks/hooks';
import { useNavigate } from 'react-router-dom';
import BalanceTable from './balance-table';
import { useState } from 'react';
import { navigateToMain, toggleQuiz } from './balance-services';
import Quiz from '../../quiz-game/quiz';

const BalanceContent = () => {
  const [activeBought, setActiveBought] = useState(false);
  const [activeSold, setActiveSold] = useState(false);
  const [isQuiz, setIsQuiz] = useState(false);
  const currentUser = useAppSelector((state) => state.authReducer.currentUser);
  const navigate = useNavigate();
  return (
    <StylesBalanceContent>
      <StylesBalanceHeader>
        <StylesBalanceUser>
          {currentUser?.email}
          <StylesBalanceUserIcon />
          <StylesBalanceUserAmount>
            {currentUser?.amount} $
          </StylesBalanceUserAmount>
        </StylesBalanceUser>
        <StylesBalanceBack>
          <StylesBalanceBackIcon onClick={() => navigateToMain(navigate)} />
        </StylesBalanceBack>
      </StylesBalanceHeader>
      <StylesBalanceMain>
        <StylesBalanceBlock>
          <StylesBalanceHeaderBlock>
            <StylesBalanceBlockH1>Transaction History</StylesBalanceBlockH1>
            <StylesBalanceQuizButton onClick={() => toggleQuiz(setIsQuiz)}>
              Increase Balance
            </StylesBalanceQuizButton>
          </StylesBalanceHeaderBlock>
          <BalanceTable
            activeBought={activeBought}
            activeSold={activeSold}
            setActiveBought={setActiveBought}
            setActiveSold={setActiveSold}
          />
          {isQuiz && <Quiz setIsQuiz={setIsQuiz} />}
        </StylesBalanceBlock>
      </StylesBalanceMain>
    </StylesBalanceContent>
  );
};

export default BalanceContent;
