import ReactPlayer from 'react-player';
import styled from 'styled-components';

export const StylesVideoModalBackground = styled.div`
  background-color: rgba(49, 49, 49, 0.8);
`;
export const StylesVideoModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 3;

  & ${StylesVideoModalBackground} {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
`;
export const StylesVideoModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: #f1f1f1;
  border-radius: 3px;
  max-width: 900px;
  min-width: 500px;
  color: black;
`;
export const StylesVideo = styled(ReactPlayer)``;
