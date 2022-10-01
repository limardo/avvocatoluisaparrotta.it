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
  position: absolute;
  z-index: 1001;
  left: 0;
  width: 100%;
  height: 90px;
  margin: 0;
  background: rgb(20 20 20 / 80%);
  outline: none;
  transition: 0.7s;

  &.transparent {
    background: none;
  }

  .header-col {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .h-phone {
    position: relative;
    padding-top: 20px;
    padding-left: 50px;
    color: #fff;
    font-size: 18px;
    font-weight: bold;

    span {
      position: absolute;
      top: 0;
      left: 50px;
      display: inline-block;
      font-size: 12px;
      font-weight: 500;
    }
  }

  &.header-mobile {
    position: relative;
    top: 0;
    overflow: hidden;
    padding: 15px 0;
    background: #fff;
    transition: height 0.5s ease-out;

    li:last-child {
      border-bottom: none;
      margin-bottom: 0;
    }
  }

  &.sticky {
    position: fixed;
    top: 0;
    padding: 0;
    border: 0;
    background: rgb(0 0 0 / 80%);
    box-shadow: 0 4px 6px 0 rgb(10 10 10 / 5%);
  }

  @media (max-width: 991px) {
    .header-col {
      justify-content: start;
    }

    .header-logo {
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 6px;
      padding-bottom: 6px;
    }

    .header-phone {
      display: none;
    }
  }
`;

const HeaderPhoneIconStyled = styled(FontAwesomeIcon).attrs({ icon: faPhone, flip: 'horizontal' })`
  position: absolute;
  top: 8px;
  left: 0;
  display: inline-block;
  color: var(--primary-color);
  font-size: 32px;
`;

const HeaderBurgerMenuStyled = styled.span`
  width: 32px;
  height: 32px;
  padding: 5px;
  background-color: var(--primary-color);
  color: #fff;
  cursor: pointer;
  text-align: center;
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
  const [headerClassname, setHeaderClassname] = React.useState<string>('transparent');

  React.useEffect(() => {
    const classes = ['transparent', ...(mobile ? ['header-mobile'] : []), ...(!mobile && isSticky ? ['sticky'] : [])];
    setHeaderClassname(classes.join(' '));
  }, [mobile, headerClassname, isSticky]);

  return (
    <HeaderStyled ref={headerRef} className={headerClassname}>
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
