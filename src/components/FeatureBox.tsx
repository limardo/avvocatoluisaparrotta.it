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
  color: var(--primary-color);
  text-align: center;
  font-size: 42px;
  width: 42px;
  height: 42px;
  margin-bottom: 20px;
`;

const BackgroundIconStyled = styled.i<{ icon: IconProp | string }>`
  position: absolute;
  font-size: 240px;
  background: none;
  width: auto;
  height: auto;
  color: rgba(0, 0, 0, 0.2);
  right: 0;
  bottom: -10%;
  left: 50%;
  transition: 0.7s;
  outline: none;
  text-align: center;
  opacity: 0.2;
  z-index: 0;
  letter-spacing: -0.05em;
`;

const FeatureBoxStyled = styled.div`
  padding: 50px;
  background: #f8f8f8;
  background-size: auto;
  position: relative;
  overflow: hidden;
  text-align: center;
  transition: 0.7s;
  outline: none;
  height: 100%;

  ${MainIconStyled},
  h4 {
    transition: 0.7s;
  }

  ${ListItemIconStyled} {
    transition: 0.7s;
  }

  &:hover {
    color: #ffffff;
    background: var(--primary-color);
    box-shadow: 2px 2px 30px 0 rgba(0, 0, 0, 0.2);

    ${MainIconStyled},
    h4 {
      color: #ffffff;
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
