import { faFacebookF, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Link from './Link';

const query = graphql`
  query TopbarQuery {
    site {
      siteMetadata {
        email
        linkedin
        facebook
      }
    }
    allMdx(
      filter: { frontmatter: { menu: { top: { label: { regex: "/.+/" } } } } }
      sort: { order: ASC, fields: frontmatter___menu___top___order }
    ) {
      nodes {
        frontmatter {
          slug
          menu {
            top {
              label
              order
            }
          }
        }
      }
    }
  }
`;

const TopbarLinkStyled = styled(Link)``;

const TopbarStyled = styled.div`
  z-index: 1000;
  width: 100%;
  overflow: hidden;
  top: 0;
  background: #111111;

  & a,
  & a:focus,
  & ${TopbarLinkStyled}, & ${TopbarLinkStyled}:focus {
    text-decoration: none;
    color: #ffffff;
  }

  .topbar-left,
  .topbar-right {
    display: inline-flex;
    flex: 1 1 auto;
    width: auto;
  }

  .topbar-left {
    justify-content: flex-start;
  }

  .topbar-right {
    justify-content: flex-end;
  }

  .topbar-widget {
    font-size: 13px;
    display: inline-flex;
    padding: 8px 15px;
    font-weight: 400;
    height: 40px;
  }

  .topbar-widget.tb-social {
    padding: 0;
    align-items: center;
  }

  .topbar-widget.tb-social a {
    display: inline-block;
    font-size: 14px;
    padding: 5px 15px;
    text-align: center;
  }
`;

const TopbarIconStyled = styled(FontAwesomeIcon)`
  color: var(--primary-color);
  position: relative;
`;

const Topbar: React.FC<any> = () => {
  const {
    site: {
      siteMetadata: { email, linkedin, facebook }
    },
    allMdx: { nodes }
  } = useStaticQuery(query);

  const menuItems = (nodes as any[]).map((item, index) => (
    <span key={index} className="topbar-widget">
      <TopbarLinkStyled hash={item.frontmatter.slug}>{item.frontmatter.menu.top.label}</TopbarLinkStyled>
    </span>
  ));

  return (
    <TopbarStyled className="d-none d-md-block">
      <div className="container">
        <div className="row">
          <div className="topbar-left">
            <span className="topbar-widget tb-social">
              <a href={facebook} target="_blank" rel="noopener" aria-label="facebook">
                <TopbarIconStyled icon={faFacebookF} />
              </a>
              <a href={linkedin} target="_blank" rel="noopener" aria-label="linkedin">
                <TopbarIconStyled icon={faLinkedin} />
              </a>
              <a href={`mailto:${email}`} aria-label="email">
                <TopbarIconStyled icon={faEnvelope} />
              </a>
            </span>
          </div>
          <div className="topbar-right">
            {/*
            <span className="topbar-widget">
              <a href={`/#`}>Policy privacy</a>
            </span>
            */}
            {menuItems}
          </div>
        </div>
      </div>
    </TopbarStyled>
  );
};

export default Topbar;
