import styled from 'styled-components';

export const MoviesListTag = styled.div`
  background-color: #181818;
  height: 100vh;
`;

export const MoviesListContainerTag = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 15%);
  justify-content: center;
  align-items: center;
  row-gap: 20px;
`;

export const MoviesListItemTag = styled.div``;

export const MoviesListImageTag = styled.img`
  width: 200px;
  height: 210px;
  cursor: pointer;
`;
