import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export const query = graphql`
  query RecaptchaQuery {
    site {
      siteMetadata {
        googleRecaptchaSitekey
      }
    }
  }
`;

const Recaptcha: React.FC<any> = ({ children }) => {
  const data = useStaticQuery(query);

  return data.site.siteMetadata.googleRecaptchaSitekey ? (
    <GoogleReCaptchaProvider
      reCaptchaKey={data.site.siteMetadata.googleRecaptchaSitekey}
      language="it"
      useRecaptchaNet={false}
      useEnterprise={false}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: 'body'
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  ) : (
    children
  );
};

export default Recaptcha;
