import ScrollSpy from 'bootstrap/js/dist/scrollspy';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { useMobile } from '../hooks/useMobile';
import { usePreload } from '../hooks/usePreload';
import Link from './Link';

export interface MainMenuProps {
  target: React.RefObject<HTMLElement>;
}

const query = graphql`
  query MainMenuQuery {
    allMdx(
      filter: { frontmatter: { menu: { main: { label: { regex: "/.+/" } } }, enabled: { eq: true } } }
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
  margin: 0 auto;
  float: none;
  font-size: 13px;
  text-transform: uppercase;

  ${MainMenuLinkStyled} {
    position: relative;
    display: inline-block;
    padding: 30px 18px;
    color: #fff;
    outline: none;
    text-align: center;
    text-decoration: none;

    &:focus {
      color: #fff;
    }

    a &.active,
    &:hover {
      color: var(--primary-color);
    }
  }

  ul {
    overflow: hidden;
    height: 30px;
    padding: 0;
    border-radius: 2px;
    margin: 0;
    background: #fff;
    box-shadow: 2px 2px 30px 0 rgb(20 20 20 / 10%);
  }

  li {
    position: relative;
    display: inline;
    padding: 0;
    margin: 0;
    float: left;
    list-style: none;
  }

  & > li {
    font-weight: 500;
    letter-spacing: 1px;
  }

  &.mobile {
    z-index: 200;
    width: 100%;
    padding: 0;
    margin: 0;
    float: none;
    text-align: left;

    li {
      display: block;
      width: 100%;
      border-bottom: solid 1px #eee;
      margin: 0;

      &:last-child {
        margin-bottom: 30px;
      }

      & ${MainMenuLinkStyled} {
        width: 100%;
        padding: 10px 0;
        color: #888;
        text-align: left;

        &::after {
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
  const {
    allMdx: { nodes }
  } = useStaticQuery(query);
  const mobile = useMobile();
  const loaded = usePreload();
  const [mainMenuClassname, setMainMenuClassname] = React.useState<string>('');

  React.useEffect(() => {
    let scrollSpy = {
      dispose() {}
    };

    new Promise<number>((resolve) => setTimeout(resolve, 1000)).then((c) => {
      clearTimeout(c);

      scrollSpy = new ScrollSpy(document.body, {
        target: target.current,
        offset: 40
      });
    });

    return () => scrollSpy.dispose();
  }, [loaded]);

  React.useEffect(() => {
    setMainMenuClassname(mobile ? 'mobile' : '');
  }, [mobile]);

  const menuItems = (nodes as any[]).map((item, index) => (
    <li key={index}>
      <MainMenuLinkStyled hash={item.frontmatter.slug} className="nav-link">
        {item.frontmatter.menu.main.label}
      </MainMenuLinkStyled>
    </li>
  ));

  return <MainMenuStyled className={mainMenuClassname}>{menuItems}</MainMenuStyled>;
};

export default MainMenu;
