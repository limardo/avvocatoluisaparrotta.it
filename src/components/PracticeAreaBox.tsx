import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import loadable from '@loadable/component';
import React from 'react';
import styled from 'styled-components';

const Icofont = loadable(() => import('react-icofont'));

export interface PracticeAreaBoxProps {
  title: string;
  icon: IconProp | string;
  set?: 'fontawesome' | 'icofont';
}

const PracticeAreaBoxIconStyled = styled.i<{ icon: string | IconProp }>`
  display: block;
  color: #f8f9fa;
  background: var(--primary-color);
  font-size: 36px;
  text-align: center;
  padding: 22px;
  margin-right: 30px;
  width: 80px;
  height: 80px;
  border-radius: 2px;
`;

const PracticeAreaBoxStyled = styled.div`
  display: flex;
  transition: 0.7s;
  outline: none;
`;

const PracticeAreaBox: React.FC<PracticeAreaBoxProps> = ({ title, icon, set = 'fontawesome', children }) => {
  const IconComponent = set === 'fontawesome' ? FontAwesomeIcon : set === 'icofont' ? Icofont : 'i';

  return (
    <PracticeAreaBoxStyled>
      <PracticeAreaBoxIconStyled as={IconComponent} icon={icon} />
      <div className="fb-text">
        <h4>{title}</h4>
        <p>{children}</p>
      </div>
    </PracticeAreaBoxStyled>
  );
};

export default PracticeAreaBox;
