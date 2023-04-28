import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import { useMobile } from '../hooks/useMobile';

const LogoStyled = styled.div`
  height: auto;
  color: white;
  transition: all 0.3s;

  & .logo {
    display: inline-block;
  }

  & .logo-2 {
    display: none;
  }

  & .logo img,
  & .logo-2 img {
    width: 200px;
    max-width: 200px;
    height: auto;
  }

  &.mobile {
    .logo {
      display: none;
    }

    .logo-2 {
      display: inline-block;
    }
  }
`;

const Logo: React.FC<any> = () => {
  const mobile = useMobile();
  const [logoClassName, setLogoClassName] = React.useState<string>('');

  React.useEffect(() => {
    setLogoClassName(mobile ? 'mobile' : '');
  }, [mobile]);

  return (
    <LogoStyled className={logoClassName}>
      <a href="/" aria-label="logo">
        <StaticImage
          src="../images/logo-light.svg"
          alt="Logo"
          className="logo"
          width={1200}
          height={287}
          loading="eager"
        />
        <StaticImage src="../images/logo.svg" alt="Logo" className="logo-2" width={1200} height={287} loading="eager" />
      </a>
    </LogoStyled>
  );
};

export default Logo;
