import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const BackToTopStyled = styled.button`
  position: fixed;
  bottom: -40px;
  right: 20px;
  z-index: 1020;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  border: 0;
  border-radius: 2px;
  text-decoration: none;
  transition: opacity 0.2s ease-out;
  outline: none;
  opacity: 0;
  padding-top: 4px;
  background: var(--primary-color);

  &.show,
  &.hide {
    transition: 0.7s;
    outline: none;
  }

  &.show {
    bottom: 20px;
    opacity: 1;
  }

  &.hide {
    bottom: -40px;
  }
`;

const BackToTopIconStyled = styled(FontAwesomeIcon)`
  position: relative;
  font-size: 16px;
  color: #ffffff;
`;

const BackToTop: React.FC<any> = () => {
  const scrollTrigger = 500; // px
  const el = React.useRef<HTMLButtonElement>(null);
  const [classnameBackToTop, setClassnameBackToTop] = React.useState<'show' | 'hide'>();

  const checkBackToTop = React.useCallback(() => {
    if (window.pageYOffset > scrollTrigger) {
      setClassnameBackToTop('show');
    } else if (window.pageYOffset <= scrollTrigger) {
      setClassnameBackToTop('hide');
    }
  }, [classnameBackToTop]);

  const handleBackToTop: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', checkBackToTop);

    return () => window.removeEventListener('scroll', checkBackToTop);
  }, []);

  return (
    <BackToTopStyled ref={el} className={classnameBackToTop} onClick={handleBackToTop} aria-label="Torna su">
      <BackToTopIconStyled icon={faChevronUp} />
    </BackToTopStyled>
  );
};

export default BackToTop;
