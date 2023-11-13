import styled from 'styled-components';

export const FilteredTag = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 230px);
  color: white;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
  padding-bottom: 30px;
  height: 100%;
`;

export const FoundMovieTag = styled.div`
  width: 190px;
  cursor: pointer;
`;
