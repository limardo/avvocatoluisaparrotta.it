import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import loadable from '@loadable/component';
import React from 'react';
import styled from 'styled-components';

const Icofont = loadable(() => import('react-icofont'));

export interface PracticeAreaBoxProps extends React.PropsWithChildren {
  title: string;
  icon: IconProp | string;
  set?: 'fontawesome' | 'icofont';
}

const PracticeAreaBoxIconStyled = styled.i<{ icon: string | IconProp }>`
  display: block;
  width: 80px;
  height: 80px;
  padding: 22px;
  border-radius: 2px;
  margin-right: 30px;
  background: var(--primary-color);
  color: #f8f9fa;
  font-size: 36px;
  text-align: center;
`;

const PracticeAreaBoxStyled = styled.div`
  display: flex;
  outline: none;
  transition: 0.7s;
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
