import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const NotFoundPageStyled = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #181715;
  color: #f8f9fa;

  h1 {
    color: #f8f9fa;
  }

  a {
    color: #fff;
    text-decoration: none;

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
