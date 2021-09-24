import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const BackToTopStyled = styled.button`
  position: fixed;
  z-index: 1020;
  bottom: -40px;
  left: 20px;
  width: 40px;
  height: 40px;
  padding-top: 4px;
  border: 0;
  background: var(--primary-color);
  border-radius: 2px;
  cursor: pointer;
  line-height: 30px;
  opacity: 0;
  outline: none;
  text-align: center;
  text-decoration: none;
  transition: opacity 0.2s ease-out;

  &.show,
  &.hide {
    outline: none;
    transition: 0.7s;
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
  color: #fff;
  font-size: 16px;
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
