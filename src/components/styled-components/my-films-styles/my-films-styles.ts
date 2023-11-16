import styled from 'styled-components';
import { netflixBackgroundImage } from '../../../services';

export const StylesMyFilms = styled.div`
  background-image: url(${netflixBackgroundImage});
  background-position: center;
  background-repeat: repeat;
  min-height: 100dvh;
  position: relative;
`;
export const StylesAccountAmountWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 60px;
  width: 100vw;
`;
export const StylesAccountAmount = styled.div`
  position: fixed;
  top: 90px;
  color: white;
  font-size: 40px;
  font-weight: bold;
  width: 100%;
  padding: 30px;
`;
export const StylesMyFilmsContainer = styled.div`
  display: grid;
  max-width: 1600px;
  grid-template-columns: repeat(5, auto);
  align-items: center;
  row-gap: 90px;
  column-gap: 10px;
  padding: 100px;
  height: 100%;
`;
export const StylesMyFilm = styled.div`
  width: 250px;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35);
`;
export const StylesMyFilmImage = styled.img`
  width: 190px;
  height: 190px;
`;
export const StylesMyFilmsTitle = styled.div`
  color: white;
`;
export const StylesMyFilmSellButton = styled.button`
  display: block;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  background-color: transparent;
  padding: 8px;
  width: 80px;
  transition: all 0.7s ease-out;
  cursor: pointer;

  &:hover {
    background-color: gray;
    color: white;
  }
`;
