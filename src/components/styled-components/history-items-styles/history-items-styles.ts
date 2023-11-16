import { GoArrowDownLeft, GoArrowUpRight } from 'react-icons/go';
import styled from 'styled-components';

export const StylesHistoryItems = styled.div``;
export const StylesHistoryTransaction = styled.div``;
export const StylesHistoryItem = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
`;
export const StylesHistoryLeftSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  column-gap: 15px;
`;
export const StylesHistoryIcon = styled.div``;
export const StylesHistoryArrowUp = styled(GoArrowUpRight)`
  width: 50px;
  height: 50px;
  color: green;
`;
export const StylesHistoryArrowDown = styled(GoArrowDownLeft)`
  width: 50px;
  height: 50px;
  color: red;
`;
export const StylesHistorySides = styled.div``;
export const StylesHistoryType = styled.div`
  text-transform: uppercase;
`;
export const StylesHistoryRightSide = styled.div`
  width: 300px;
`;
export const StylesHistoryRightMovie = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  column-gap: 20px;
  border-bottom: 1px solid gray;
  padding-bottom: 15px;
`;
export const StylesHistoryRightDate = styled.div`
  margin-top: 20px;

  &:hover {
    text-decoration: underline;
  }
`;
