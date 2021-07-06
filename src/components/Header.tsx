import { faBars, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { useBurgerMenu } from '../hooks/useBurgerMenu';
import { useMobile } from '../hooks/useMobile';
import { useStickyHeader } from '../hooks/useStickyHeader';
import Logo from './Logo';
import MainMenu from './MainMenu';

const HeaderStyled = styled.header`
  width: 100%;
  position: absolute;
  left: 0;
  z-index: 1001;
  background: rgba(20, 20, 20, 0.8);
  margin: 0;
  height: 90px;
  transition: 0.7s;
  outline: none;

  &.transparent {
    background: none;
  }

  .header-col {
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  .h-phone {
    position: relative;
    font-weight: bold;
    color: #ffffff;
    padding-left: 50px;
    font-size: 18px;
    padding-top: 20px;

    span {
      display: inline-block;
      position: absolute;
      left: 50px;
      top: 0;
      font-size: 12px;
      font-weight: 500;
    }
  }

  &.header-mobile {
    position: relative;
    background: #fff;
    top: 0;
    overflow: hidden;
    padding: 15px 0;
    transition: height 0.5s ease-out;

    li:last-child {
      margin-bottom: 0;
      border-bottom: none;
    }
  }

  &.sticky {
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    padding: 0;
    box-shadow: 0 4px 6px 0 rgba(10, 10, 10, 0.05);
    border: 0;
  }

  @media (max-width: 991px) {
    .header-col {
      justify-content: start;
    }

    .header-logo {
      display: inline-flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 6px;
      padding-bottom: 6px;
    }

    .header-phone {
      display: none;
    }
  }
`;

const HeaderPhoneIconStyled = styled(FontAwesomeIcon).attrs({ icon: faPhone, flip: 'horizontal' })`
  color: var(--primary-color);
  display: inline-block;
  position: absolute;
  font-size: 32px;
  left: 0;
  top: 8px;
`;

const HeaderBurgerMenuStyled = styled.span`
  width: 32px;
  height: 32px;
  padding: 5px;
  text-align: center;
  cursor: pointer;
  color: #fff;
  background-color: var(--primary-color);
  transition: background-color 0.2s ease-out, color 0.4s ease-out;

  &:hover {
    background-color: #fff;
    color: #888;
  }
`;

const HeaderBurgerMenuIconStyled = styled(FontAwesomeIcon).attrs({ icon: faBars })`
  font-size: 20px;
`;

const Header: React.FC<any> = () => {
  const headerRef = React.useRef<HTMLElement>(null);
  const mainMenuRef = React.useRef<HTMLElement>(null);
  const mobile = useMobile();
  const handleBurgetMenu = useBurgerMenu(headerRef.current, mobile);
  const isSticky = useStickyHeader();

  const headerClassname = [
    'transparent',
    ...(mobile ? ['header-mobile'] : []),
    ...(!mobile && isSticky ? ['sticky'] : [])
  ];

  return (
    <HeaderStyled ref={headerRef} className={headerClassname.join(' ')}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row justify-content-between">
              <div className="col-lg-auto header-col header-logo">
                <Logo />
                <HeaderBurgerMenuStyled className="d-block d-lg-none" onClick={handleBurgetMenu}>
                  <HeaderBurgerMenuIconStyled />
                </HeaderBurgerMenuStyled>
              </div>
              <nav ref={mainMenuRef} id="mainmenu" className="col-lg header-col">
                <MainMenu target={mainMenuRef} />
              </nav>
              <div className="col-lg-auto header-col header-phone">
                <div className="h-phone d-none d-xl-block">
                  <span>Bisogno&nbsp;di&nbsp;aiuto?</span>
                  <HeaderPhoneIconStyled /> +39 380 189 2602
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
