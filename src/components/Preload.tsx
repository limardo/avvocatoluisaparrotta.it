import React from 'react';
import styled from 'styled-components';
import { usePreload } from '../hooks/usePreload';

const PreloadStyled = styled.div`
  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }

    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  display: none;
  position: fixed;
  z-index: 20000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #ffffff;
  align-items: center;
  justify-content: center;

  .spinner {
    display: inline-flex;
    height: auto;

    .bounce {
      display: block;
      background: var(--primary-color);
      margin: 0 5px;
      width: 18px;
      height: 18px;
      border-radius: 100%;
      animation: sk-bouncedelay 1.4s infinite ease-in-out both;
      animation-delay: 0s;

      &:nth-child(0) {
        animation-delay: -0.32s;
      }

      &:nth-child(1) {
        animation-delay: -0.16s;
      }

      &:nth-child(2) {
      }
    }
  }
`;

const Preload: React.FC<any> = () => {
  const loaded = usePreload();
  const preloadClassname = loaded ? 'd-none' : 'd-flex';

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
