import React from 'react';
import Header from '../header/header';
import Main from '../main/main';
import { StylesFirstPage } from '../styled-components/first-page-styles/first-page-styles';

const FirstPage = () => {
  return (
    <StylesFirstPage>
      <Header />
      <Main />
    </StylesFirstPage>
  );
};

export default FirstPage;
