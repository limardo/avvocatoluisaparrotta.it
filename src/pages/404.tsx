import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const NotFoundPageStyled = styled.section`
  display: flex;
  position: relative;
  color: #f8f9fa;
  background: #181715;
  align-items: center;
  justify-content: center;

  h1 {
    color: #f8f9fa;
  }

  a {
    text-decoration: none;
    color: #ffffff;

    &:hover {
      color: var(--primary-color);
    }
  }
`;

const NotFoundPage = () => {
  return (
    <Layout>
      <NotFoundPageStyled id="not-found" aria-label="section" className="vh-100 p-0">
        <div className="text-center">
          <h1>Pagina non trovata</h1>
          <p>Ci Dispiace che non siamo riusciti a trovare quello che stavi cercando.</p>
          <a href="/" aria-label="torna alla home">
            Torna alla home
          </a>
        </div>
      </NotFoundPageStyled>
    </Layout>
  );
};

export default NotFoundPage;
