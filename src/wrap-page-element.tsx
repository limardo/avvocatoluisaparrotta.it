import React from 'react';
import { GlobalStyle } from './components/GlobalStyle';
import Recaptcha from './components/Recaptcha';

export const wrapPageElement = ({ element }: any) => {
  return (
    <Recaptcha>
      <GlobalStyle />
      {element}
    </Recaptcha>
  );
};
