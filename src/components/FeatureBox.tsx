import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import loadable from '@loadable/component';
import React from 'react';
import styled from 'styled-components';
import { ListItemIconStyled } from './List';

const Icofont = loadable(() => import('react-icofont'));

export interface FeatureBoxProps {
  title: string;
  icon: IconProp | string;
  set?: 'fontawesome' | 'icofont';
}

const MainIconStyled = styled.i<{ icon: IconProp | string }>`
  width: 42px;
  height: 42px;
  margin-bottom: 20px;
  color: var(--primary-color);
  font-size: 42px;
  text-align: center;
`;

const BackgroundIconStyled = styled.i<{ icon: IconProp | string }>`
  position: absolute;
  z-index: 0;
  right: 0;
  bottom: -10%;
  left: 50%;
  width: auto;
  height: auto;
  background: none;
  color: rgb(0 0 0 / 20%);
  font-size: 240px;
  letter-spacing: -0.05em;
  opacity: 0.2;
  outline: none;
  text-align: center;
  transition: 0.7s;
`;

const FeatureBoxStyled = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
  padding: 50px;
  background: #f8f8f8;
  background-size: auto;
  outline: none;
  text-align: center;
  transition: 0.7s;

  ${MainIconStyled},
  h4 {
    transition: 0.7s;
  }

  ${ListItemIconStyled} {
    transition: 0.7s;
  }

  &:hover {
    background: var(--primary-color);
    box-shadow: 2px 2px 30px 0 rgb(0 0 0 / 20%);
    color: #fff;

    ${MainIconStyled},
    h4 {
      color: #fff;
    }

    ${BackgroundIconStyled} {
      transform: rotate(-25deg);
      transition: 2s ease;
    }

    ${ListItemIconStyled} {
      background: #fff;
    }
  }
`;

const FeatureBox: React.FC<FeatureBoxProps> = ({ title, icon, set = 'fontawesome', children }) => {
  const IconComponent = set === 'fontawesome' ? FontAwesomeIcon : set === 'icofont' ? Icofont : 'i';

  return (
    <FeatureBoxStyled>
      <MainIconStyled as={IconComponent} icon={icon} />
      <div className="text">
        <h4>{title}</h4>
        <div className="text-start">{children}</div>
      </div>
      <BackgroundIconStyled as={IconComponent} icon={icon} />
    </FeatureBoxStyled>
  );
};

export default FeatureBox;
