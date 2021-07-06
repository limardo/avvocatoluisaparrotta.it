import React from 'react';
import { GlobalStyle } from './components/GlobalStyle';
import Seo from './components/Seo';

export const wrapPageElement = ({ element, props }: any) => {
  return (
    <React.Fragment>
      <Seo />
      <GlobalStyle />
      {element}
    </React.Fragment>
  );
};
