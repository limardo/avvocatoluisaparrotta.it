import React from 'react';
import styled from 'styled-components';
import { usePreload } from '../hooks/usePreload';

const PreloadStyled = styled.div`
  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      transform: scale(0);
    }

    40% {
      transform: scale(1);
    }
  }

  position: fixed;
  z-index: 10000000;
  inset: 0;
  display: none;
  align-items: center;
  justify-content: center;
  background: #fff;

  .spinner {
    display: inline-flex;
    height: auto;

    .bounce {
      display: block;
      width: 18px;
      height: 18px;
      border-radius: 100%;
      margin: 0 5px;
      animation: sk-bouncedelay 1.4s infinite ease-in-out both;
      animation-delay: -0.32s;
      background: var(--primary-color);

      &:nth-child(1) {
        animation-delay: -0.16s;
      }

      &:nth-child(2) {
        animation-delay: 0s;
      }
    }
  }
`;

const Preload: React.FC<any> = () => {
  const loaded = usePreload();
  const [preloadClassname, setPreloadClassname] = React.useState<string>('d-flex');

  React.useEffect(() => {
    setPreloadClassname(loaded ? 'd-none' : 'd-flex');
  }, [loaded]);

  return (
    <PreloadStyled className={preloadClassname}>
      <div className="spinner">
        <div className="bounce" />
        <div className="bounce" />
        <div className="bounce" />
      </div>
    </PreloadStyled>
  );
};

export default Preload;
