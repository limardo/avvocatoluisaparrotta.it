import React from 'react';
import { GlobalStyle } from './components/GlobalStyle';
import Recaptcha from './components/Recaptcha';
import Seo from './components/Seo';

export const wrapPageElement = ({ element, ...props }: any) => {
  return (
    <Recaptcha>
      <Seo />
      <GlobalStyle />
      {element}
    </Recaptcha>
  );
};
