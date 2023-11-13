import styled from 'styled-components';

export const MovieDetailsTag = styled.div`
  background-color: #181818;
  height: 100vh;
  margin-top: -70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const MovieDetailsContainer = styled.div`
  width: 1362px;
  display: flex;
`;
export const MovieDetailsContentTag = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  color: white;
`;
export const MovieMoreDetailsH2Tag = styled.h2``;
export const MoreDetailsTag = styled.div`
  display: grid;
  justify-content: start;
  padding-top: 60px;
  grid-template-columns: repeat(4, 23%);
  color: white;
  gap: 100px;

  & a {
    text-decoration: none;
    color: white;
  }

  & a:hover {
    text-decoration: underline;
  }

  & h5 {
    font-size: 20px;
    padding-bottom: 10px;
  }
`;

export const MovieInfoDetailsTag = styled.div``;
export const MovieDetailsBlockTag = styled.div``;
