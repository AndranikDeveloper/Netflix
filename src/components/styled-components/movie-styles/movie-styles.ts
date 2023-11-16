import styled from 'styled-components';

type PropsType = {
  imageUrl: string;
};

export const MovieMainBlockTag = styled.div`
  position: relative;
`;
export const StylesMovieMainUserAmount = styled.div`
  position: fixed;
  top: 130px;
  left: 50px;
  font-size: 50px;
  color: white;
  z-index: 3;
  font-weight: 800;
`;
export const MovieInfoTag = styled.div`
  height: calc(100vh - 103px);
  color: white;
  position: relative;
`;
export const MovieInfoContainerTag = styled.div<PropsType>`
  background-image: url(${({ imageUrl }) => imageUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: calc(100vh - 103px);
`;

export const MovieInfoContentTag = styled.div`
  max-width: 500px;
  position: absolute;
  left: 2%;
  top: 20%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const MovieTitleTag = styled.h6`
  font-size: 60px;
`;

export const MovieOverviewTag = styled.span`
  font-size: 17px;
`;
