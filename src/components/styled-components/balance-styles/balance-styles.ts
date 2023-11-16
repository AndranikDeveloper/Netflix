import { BiArrowToLeft, BiUserCircle } from 'react-icons/bi';
import styled from 'styled-components';
import { BalanceButtonsProps } from '../../../types/styled-component-types/styled-component-styles';

export const StylesBalance = styled.div`
  background-color: #161616;
  min-height: 100dvh;
  padding: 40px;
  margin: 0 auto;
`;
export const StylesBalanceContainer = styled.div``;
export const StylesBalanceContent = styled.div``;
export const StylesBalanceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  padding-bottom: 20px;
`;
export const StylesBalanceUser = styled.div`
  text-transform: uppercase;
  color: white;
  display: flex;
  column-gap: 20px;
  align-items: center;
  text-align: center;
`;
export const StylesBalanceUserIcon = styled(BiUserCircle)`
  width: 25px;
  height: 25px;
`;
export const StylesBalanceBack = styled.div``;
export const StylesBalanceBackIcon = styled(BiArrowToLeft)`
  width: 35px;
  height: 35px;
  color: white;
  cursor: pointer;
  transition: all 0.7s ease;

  &:hover {
    transform: scale(1.25);
  }
`;
export const StylesBalanceMain = styled.div``;
export const StylesBalanceBlock = styled.div`
  max-width: 1000px;
  margin: auto;
  color: white;
  padding-top: 10%;
`;
export const StylesBalanceBlockH1 = styled.h1``;
export const StylesBalanceBlockTable = styled.div`
  min-height: 600px;
  border: 1px solid gray;
  width: 100%;
`;
export const StylesBalanceTableHeader = styled.div`
  height: 110px;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  column-gap: 20px;
`;
export const StylesBalanceTableBought = styled.button<BalanceButtonsProps>`
  padding: 10px;
  color: white;
  background-color: #161616;
  border: 1px solid gray;
  cursor: pointer;
  width: 200px;
  height: 50px;
  transition: all 0.9s ease-in-out;
  font-size: 16px;

  &:hover {
    transform: scale(1.1);
    background-color: #6bfea3;
  }

  ${({ activeBought }) => (activeBought ? 'background-color: #6bfea3' : '')}
`;
export const StylesBalanceTableSold = styled(StylesBalanceTableBought)`
  &:hover {
    background-color: #5d0900;
  }

  ${({ activeSold }) => (activeSold ? 'background-color: #5d0900' : '')}
`;
export const StylesBalanceTableContent = styled.div``;
