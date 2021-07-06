import ScrollSpy from 'bootstrap/js/dist/scrollspy';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { useMobile } from '../hooks/useMobile';
import Link from './Link';

export interface MainMenuProps {
  target: React.RefObject<HTMLElement>;
}

const query = graphql`
  query MainMenuQuery {
    allMdx(
      filter: { frontmatter: { menu: { main: { label: { regex: "/.+/" } } } } }
      sort: { order: ASC, fields: frontmatter___menu___main___order }
    ) {
      nodes {
        frontmatter {
          slug
          menu {
            main {
              label
            }
          }
        }
      }
    }
  }
`;

const MainMenuLinkStyled = styled(Link)``;

const MainMenuStyled = styled.ul`
  font-size: 13px;
  margin: 0 auto;
  float: none;
  text-transform: uppercase;

  ${MainMenuLinkStyled} {
    position: relative;
    display: inline-block;
    padding: 30px 18px;
    text-decoration: none;
    color: #fff;
    text-align: center;
    outline: none;

    &:focus {
      color: #fff;
    }

    &.active,
    &:hover {
      color: var(--primary-color);
    }
  }

  ul {
    margin: 0 0;
    padding: 0;
    height: 30px;
    border-radius: 2px;
    overflow: hidden;
    background: #ffffff;
    box-shadow: 2px 2px 30px 0 rgba(20, 20, 20, 0.1);
  }

  li {
    margin: 0;
    padding: 0;
    float: left;
    display: inline;
    list-style: none;
    position: relative;
  }

  & > li {
    letter-spacing: 1px;
    font-weight: 500;
  }

  &.mobile {
    float: none;
    z-index: 200;
    width: 100%;
    margin: 0;
    padding: 0;
    text-align: left;

    li {
      border-bottom: solid 1px #eee;
      margin: 0;
      width: 100%;
      display: block;

      &:last-child {
        margin-bottom: 30px;
      }

      & ${MainMenuLinkStyled} {
        color: #888;
        text-align: left;
        padding: 10px 0;
        width: 100%;

        &:after {
          display: none;
        }

        &:hover {
          color: #333;
        }
      }
    }
  }
`;

const MainMenu: React.FC<MainMenuProps> = ({ target }) => {
  const mobile = useMobile();
  const mainMenuClassname = mobile ? 'mobile' : '';
  const {
    allMdx: { nodes }
  } = useStaticQuery(query);

  const menuItems = (nodes as any[]).map((item, index) => (
    <li key={index}>
      <MainMenuLinkStyled hash={item.frontmatter.slug} className="nav-link">
        {item.frontmatter.menu.main.label}
      </MainMenuLinkStyled>
    </li>
  ));

  React.useEffect(() => {
    const scrollSpy = new ScrollSpy(document.body, {
      target: target.current,
      offset: 40
    });

    return () => scrollSpy.dispose();
  }, []);

  return <MainMenuStyled className={mainMenuClassname}>{menuItems}</MainMenuStyled>;
};

export default MainMenu;
