import React from 'react';
import styled from 'styled-components';
import { useMobile } from '../hooks/useMobile';
import LogoLightSvg from '../images/logo-light.svg';
import LogoSvg from '../images/logo.svg';

const LogoStyled = styled.div`
  height: auto;
  color: white;
  transition: all 0.3s;

  img {
    width: 200px;
    max-width: 200px;
    height: auto;
  }

  & .logo {
    display: inline-block;
  }

  & .logo-2 {
    display: none;
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
  const logoClassName = mobile ? 'mobile' : '';

  return (
    <LogoStyled className={logoClassName}>
      <a href="/" aria-label="logo">
        <img alt="" className="logo" src={LogoLightSvg} width={1200} height={287} />
        <img alt="" className="logo-2" src={LogoSvg} width={1200} height={287} />
      </a>
    </LogoStyled>
  );
};

export default Logo;
