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
  top: 0;
  overflow: hidden;
  width: 100%;
  background: #111;

  & a,
  & a:focus,
  & ${TopbarLinkStyled}, & ${TopbarLinkStyled}:focus {
    color: #fff;
    text-decoration: none;
  }

  .topbar-left,
  .topbar-right {
    display: inline-flex;
    width: auto;
    flex: 1 1 auto;
  }

  .topbar-left {
    justify-content: flex-start;
  }

  .topbar-right {
    justify-content: flex-end;
  }

  .topbar-widget {
    display: inline-flex;
    height: 40px;
    padding: 8px 15px;
    font-size: 13px;
    font-weight: 400;
  }

  .topbar-widget.tb-social {
    align-items: center;
    padding: 0;
  }

  .topbar-widget.tb-social a {
    display: inline-block;
    padding: 5px 15px;
    font-size: 14px;
    text-align: center;
  }
`;

const TopbarIconStyled = styled(FontAwesomeIcon)`
  position: relative;
  color: var(--primary-color);
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
