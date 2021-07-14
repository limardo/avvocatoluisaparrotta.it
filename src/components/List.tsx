import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export const ListItemIconStyled = styled(FontAwesomeIcon).attrs({ icon: faCheck })`
  padding: 5px;
  margin-right: 15px;
  margin-bottom: -2px;
  margin-left: -37px;
  background: #111;
  border-radius: 2px;
  color: var(--primary-color);
  font-size: 22px;
`;

const ListItemStyled = styled.li`
  margin: 5px 0 0 37px;
`;

const ListStyled = styled.ul`
  padding: 0;
  list-style: none;
`;

export const ListItem: React.FC<any> = ({ children }) => {
  return (
    <ListItemStyled>
      <ListItemIconStyled />
      {children}
    </ListItemStyled>
  );
};

export const List: React.FC<any> = ({ children }) => {
  return <ListStyled>{children}</ListStyled>;
};
