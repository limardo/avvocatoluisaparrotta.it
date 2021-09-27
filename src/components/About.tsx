import { CountUp } from 'countup.js';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { AboutData, FrontmatterData } from '../data';
import Bg9 from '../images/backgrounds/9.webp';
import D1 from '../images/misc/d1.webp';
import D2 from '../images/misc/d2.webp';

const query = graphql`
  query AboutPageQuery {
    about: mdx(frontmatter: { slug: { eq: "about" } }) {
      frontmatter {
        title
        slug
        preheading
        heading
        paragraph
        preheading2
        heading2
        paragraph2
        preheading3
        heading3
        paragraph3
        preheading4
        heading4
        paragraph4
        counter1
        counterText1
        counter2
        counterText2
      }
    }
  }
`;

const AboutSectionLightStyled = styled.div`
  position: relative;
  padding: 90px 0;
  background: #fff;

  .images {
    position: relative;
    width: 100%;
    margin-top: 30px;

    .di-text,
    img {
      border-radius: 2px;
      box-shadow: 2px 20px 30px 0 rgba(20, 20, 20, 0.3);
    }

    .di-text {
      position: absolute;
      z-index: 1;
      top: 40%;
      left: -10%;
      width: 40%;
      padding: 10% 0;
      background: var(--primary-color);
      text-align: center;

      h1,
      span {
        color: #fff;
      }

      h1 {
        margin: 0;
        font-size: 4vw;
      }
    }

    .di-small-2 {
      position: absolute;
      z-index: 1;
      right: -10%;
      bottom: -10%;
      width: 40%;
      height: 40%;
    }
  }
`;

const AboutSectionDarkStyled = styled.div`
  position: relative;
  padding: 90px 0;
  background: #111;

  h2 {
    color: #fff;
  }

  p {
    color: #f8f9fa;
  }

  .count-box {
    padding: 30px;
    border: solid 2px #333;
    margin-bottom: 30px;
    outline: none;
    text-align: center;
    transition: 0.7s;

    h3 {
      padding: 0;
      margin: 0 0 15px;
      color: #fff;
      font-size: 180px;
      letter-spacing: 0;
      line-height: 1em;
    }

    span {
      padding: 5px 10px;
      color: var(--primary-color);
      font-size: 14px;
      font-weight: bold;
      letter-spacing: 5px;
      text-transform: uppercase;
    }
  }

  .image-container {
    position: absolute;
    top: 0;
    overflow: hidden;
    height: 100%;
    padding: 0;
    margin: 0;
    background: url(${Bg9}) center no-repeat;
    background-size: cover;
  }
`;

const About: React.FC<any> = () => {
  const data = useStaticQuery<{ about: FrontmatterData<AboutData> }>(query);
  const countCaseRef = React.useRef<HTMLHeadingElement>(null);
  const countYearsRef = React.useRef<HTMLHeadingElement>(null);
  const {
    slug,
    preheading,
    heading,
    paragraph,
    preheading2,
    heading2,
    paragraph2,
    preheading3,
    heading3,
    paragraph3,
    preheading4,
    heading4,
    paragraph4,
    counter1,
    counterText1,
    counter2,
    counterText2
  } = data.about.frontmatter;

  React.useEffect(() => {
    // @ts-ignore
    const countCase = new CountUp(countCaseRef.current, counter1, { startVal: counter1 * 0.8, separator: '.' });
    // @ts-ignore
    const countYears = new CountUp(countYearsRef.current, counter2, { separator: '.' });

    const handleCase = () => {
      countCase.reset();
      countCase.start();
    };

    const handleYears = () => {
      countYears.reset();
      countYears.start();
    };

    document.addEventListener('aos:in:count-case', handleCase);
    document.addEventListener('aos:in:count-years', handleYears);

    return () => {
      document.removeEventListener('aos:in:count-case', handleCase);
      document.removeEventListener('aos:in:count-years', handleYears);
    };
  }, []);

  return (
    <section id={slug} aria-label="section">
      <AboutSectionLightStyled id="about-section-1" className="pt-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5" data-aos="fade-right" data-aos-delay="200" data-aos-anchor="#about-section-1">
              <span className="p-title">{preheading}</span>
              <br />
              <h2>{heading}</h2>
              <div dangerouslySetInnerHTML={{ __html: paragraph }} />
            </div>
            <div className="col-md-6 offset-md-1">
              <div className="images">
                <div
                  className="di-text"
                  data-aos="fade-right"
                  data-aos-delay="800"
                  data-aos-anchor="#about-section-1"
                  data-aos-id="count-case"
                >
                  <h1 ref={countCaseRef}>{counter1}</h1>
                  <span>{counterText1}</span>
                </div>
                <img
                  className="di-small-2"
                  src={D2}
                  alt=""
                  width={600}
                  height={450}
                  tabIndex={0}
                  data-aos="fade-down"
                  data-aos-delay="600"
                  data-aos-anchor="#about-section-1"
                />
                <img
                  className="di-big img-fluid"
                  src={D1}
                  alt=""
                  width={600}
                  height={450}
                  tabIndex={0}
                  data-aos="fade"
                  data-aos-delay="400"
                  data-aos-anchor="#about-section-1"
                />
              </div>
            </div>
          </div>
        </div>
      </AboutSectionLightStyled>

      <AboutSectionDarkStyled id="about-section-2">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-4 col-md-12"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-anchor="#about-section-2"
              data-aos-id="count-years"
            >
              <div className="count-box">
                <h3 className="timer" ref={countYearsRef}>
                  {counter2}
                </h3>
                <span className="id-color">{counterText2}</span>
              </div>
            </div>
            <div
              className="col-lg-4 p-lg-5  mb-sm-30"
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-anchor="#about-section-2"
            >
              <span className="p-title">{preheading2}</span>
              <br />
              <h2>{heading2}</h2>
            </div>
            <div
              className="col-lg-4"
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-anchor="#about-section-2"
              dangerouslySetInnerHTML={{ __html: paragraph2 }}
            />
          </div>
        </div>
      </AboutSectionDarkStyled>

      <AboutSectionLightStyled id="about-section-3">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-4 col-md-12"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-anchor="#about-section-3"
            >
              <span className="p-title">{preheading3}</span>
              <br />
              <h2>{heading3}</h2>
            </div>
            <div
              className="col-lg-8 p-lg-5  mb-sm-30"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-anchor="#about-section-3"
              dangerouslySetInnerHTML={{ __html: paragraph3 }}
            />
          </div>
        </div>
      </AboutSectionLightStyled>

      <AboutSectionDarkStyled id="about-section-4">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-5 offset-lg-7 align-self-center"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-anchor="#about-section-4"
            >
              <span className="p-title">{preheading4}</span>
              <br />
              <h2>{heading4}</h2>
              <div dangerouslySetInnerHTML={{ __html: paragraph4 }} />
            </div>
          </div>
        </div>
        <div className="col-lg-6 image-container" />
      </AboutSectionDarkStyled>
    </section>
  );
};

export default About;
