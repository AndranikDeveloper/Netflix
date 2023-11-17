import styled from 'styled-components';

export const StylesQuiz = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
`;
export const StylesQuizBackground = styled(StylesQuiz)`
  background-color: rgba(49, 49, 49, 0.8);
`;
export const StylesQuizBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: black;
  padding: 14px 28px;
  border-radius: 3px;
  min-width: 900px;
  min-height: 500px;
  color: black;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

export const StylesQuizContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
`;

export const StylesQuizBlockH1 = styled.h1`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StylesQuizOverviewSide = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid gray;
  padding: 20px;
  align-items: center;
  border-radius: 5px;
`;
export const StylesQuizOverview = styled.div`
  color: purple;
  max-width: 350px;
  line-height: 20px;
  font-size: 18px;
`;
export const StylesQuizQuestionsSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StylesQuizItems = styled.div``;
export const StylesQuizQuestionsBlock = styled.div`
  color: white;
  cursor: pointer;
  font-size: 20px;
  max-width: 300px;
  &:hover {
    text-decoration: underline;
  }

  & {
    margin-top: 25px;
  }
`;
export const StylesQuizEnd = styled.div``;
export const StylesQuizEndCount = styled.div``;
export const StylesQuizEndText = styled.h3`
  color: white;
`;
