import styled from 'styled-components';

export const StylesMovieVideo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StylesMovieVideoContainer = styled.div`
  box-shadow: 8px 5px 16px 0 rgba(0, 0, 0, 0.37);
  margin-bottom: 32px;
  margin-top: -22px;
  position: relative;
  background-color: #2d2d2d;
  width: 1362px;
  height: 59px;
  color: white;
  z-index: 2;
`;
export const StylesMovieVideoContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 10px;
  box-shadow: 8px 5px 16px 0 rgba(0, 0, 0, 0.37);
`;

export const StylesMovieVideoLeftSide = styled.div`
  display: flex;
`;
export const StylesMoviePrice = styled.div`
  border: 0.5px solid white;
  padding: 10px;
  min-width: 100px;
  color: white;
  border-radius: 7px;
  margin-left: 20px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
export const StylesMovieVideoRightSide = styled.div``;
export const StylesMovieVideoLeftSideImage = styled.img`
  width: 38px;
  height: 38px;
`;

export const StylesMovieVideoRightSideButton = styled.button`
  border: 1px solid white;
  border-radius: 4px;
  background-color: #2d2d2d;
  padding: 10px;
  color: white;
  cursor: pointer;
  transition: all 1.2s ease-out;

  &:hover {
    background-color: white;
    color: black;
  }
`;
export const StylesMovieVideoPriceButton = styled.button`
  border: 1px solid white;
  border-radius: 4px;
  background-color: #2d2d2d;
  padding: 10px;
  color: white;
  cursor: pointer;
  transition: all 1.2s ease-out;
  margin-left: 10px;

  &:hover {
    background-color: white;
    color: black;
  }
`;
