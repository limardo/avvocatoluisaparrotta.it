import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Background, Parallax } from 'react-parallax';
import styled from 'styled-components';
import { FrontmatterData, HomeData } from '../data';
import Link from './Link';

const query = graphql`
  query HomePageQuery {
    home: mdx(frontmatter: { slug: { eq: "home" } }) {
      frontmatter {
        title
        slug
        preheading
        heading
        paragraph
        button
      }
    }
  }
`;

const HomeSection = styled.section`
  position: relative;
  color: #f8f9fa;

  .v-center {
    display: flex;
    min-height: 100vh;
    align-items: center;
  }

  h1 {
    color: #fff;
  }

  p.lead {
    margin-bottom: 40px;
  }

  .react-parallax-background-children,
  .full {
    width: 100%;
    height: 100%;
  }
`;

const HomeHeroImage = styled.div`
  display: grid;
  width: 100%;
  height: 100%;

  & > .home-hero-image-item {
    align-self: inherit;
    grid-area: 1/1;

    @media screen and (width > 993px) {
      height: 100%;
      align-self: start;
    }
  }
`;

const Home: React.FC<any> = () => {
  const data = useStaticQuery<{ home: FrontmatterData<HomeData> }>(query);
  const { slug, preheading, heading, paragraph, button } = data.home.frontmatter;

  return (
    <HomeSection id={slug} aria-label="section" className="vh-100 p-0 text-light">
      <Parallax className="vh-100" strength={200} bgImageStyle={{ color: 'red ' }}>
        <Background className="full">
          <HomeHeroImage>
            <StaticImage
              imgStyle={{ objectPosition: 'center top' }}
              className="home-hero-image-item"
              layout="fullWidth"
              aspectRatio={800 / 533}
              transformOptions={{ fit: 'cover' }}
              alt="Avv. Luisa Parrotta"
              src={'../images/backgrounds/home.webp'}
              loading="eager"
            />
          </HomeHeroImage>
        </Background>
        <div className="v-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h3 className="primary-color" data-aos="fade-up" data-aos-delay="400" data-aos-anchor={`#${slug}`}>
                  {preheading}
                </h3>
                <h1 data-aos="fade-up" data-aos-delay="600" data-aos-anchor={`#${slug}`}>
                  {heading}
                </h1>
                <p className="lead" data-aos="fade-up" data-aos-delay="800" data-aos-anchor={`#${slug}`}>
                  {paragraph}
                </p>
                <Link
                  className="btn btn-custom"
                  hash="contact"
                  data-aos="fade-up"
                  data-aos-delay="1000"
                  data-aos-anchor={`#${slug}`}
                >
                  {button}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </HomeSection>
  );
};

export default Home;
