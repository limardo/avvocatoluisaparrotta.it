import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faCheck, faLongArrowAltRight, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import LogoLightSvg from '../images/logo-light.svg';

const query = graphql`
  query FooterQuery {
    site {
      siteMetadata {
        phone
        email
        linkedin
        facebook
      }
    }
  }
`;

const FontAwesomeIconStyled = styled(FontAwesomeIcon)``;

const FontAwesomeIconPracticeAreasListItemStyled = styled(FontAwesomeIcon).attrs({ icon: faCheck })``;

const FontAwesomeIconSocialStyled = styled.a`
  display: inline-flex;
  background-color: var(--primary-color);
  font-size: 16px;
  margin: 0 5px;
  padding: 8px;
  border-radius: 2px;
  width: 34px;
  height: 34px;
  text-align: center;
  justify-content: center;
  align-items: center;
  transition: 0.7s ease-out;

  ${FontAwesomeIconStyled} {
    color: #fff;
  }

  &:hover {
    background-color: #fff;

    ${FontAwesomeIconStyled} {
      color: var(--primary-color);
    }
  }
`;

const FooterWidgetStyled = styled.div`
  border: none;
  margin-bottom: 60px;

  h4 {
    font-size: 18px;
    margin-top: 0;
    letter-spacing: normal;
  }

  a:hover {
    color: var(--primary-color);
  }

  .logo {
    height: auto;
    width: 200px;
    max-width: 200px;
  }

  address {
    margin-top: 20px;

    span {
      background: none;
      margin: 0;
      padding: 0;
      font-size: 15px;
      line-height: 1.7em;
      display: block;
      border-radius: 300px;

      a {
        color: #ffffff;
      }

      ${FontAwesomeIconStyled} {
        color: var(--primary-color);
        font-size: 15px;
        margin: 5px 15px 0 5px;
      }
    }
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

const FooterPracticeAreasListStyled = styled.ul`
  padding: 0;
  margin: 0 0 60px;

  li {
    margin: 5px 0 5px 0;

    ${FontAwesomeIconPracticeAreasListItemStyled} {
      color: var(--primary-color);
      font-size: 12px;
      margin-right: 15px;
      background: #111111;
    }
  }
`;

const FooterNewsletterStyled = styled.form`
  input[type='text'] {
    padding: 9px 12px 9px 12px;
    width: 80%;
    float: left;
    display: table-cell;
    border-radius: 2px 0 0 2px;
    border: solid 1px #333333;
    border-right: none;
    color: #ffffff;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 2px 2px 20px 0 rgba(20, 20, 20, 0.05);
    transition: 0.7s;
    outline: none;

    &:focus {
      color: #111111;
      background: #ffffff;
    }
  }

  #newsletter-subscribe {
    color: #fff;
    background: var(--primary-color);
    border-color: #333333;
  }
`;

const FooterSubfooterStyled = styled.div`
  border-top: solid 1px rgba(255, 255, 255, 0.1);
  margin-top: 40px;
  padding: 20px 0;
`;

const FooterStyled = styled.footer`
  color: #ffffff;
  background: #111111;
  padding: 80px 0 0 0;
  font-size: 14px;

  h1,
  h2,
  h4,
  h4,
  h5,
  h6 {
    color: #fff;
  }

  h5 {
    font-size: 16px;
    text-transform: none;
  }

  a {
    color: #ffffff;
    text-decoration: none !important;
  }

  .mb-20 {
    margin-bottom: 20px;
  }
`;

const Footer: React.FC<any> = () => {
  const {
    site: {
      siteMetadata: { phone, email, linkedin, facebook }
    }
  } = useStaticQuery(query);

  return (
    <FooterStyled>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <FooterWidgetStyled>
              <a href="/" aria-label="logo">
                <img alt="" className="logo mb-20" src={LogoLightSvg} width={1200} height={287} />
              </a>
              <address>
                {/*
                <span>
                  <FontAwesomeIconStyled icon={faMapMarkerAlt} />
                  08 W 36th St, New York, NY 10001
                </span>
                */}
                <span>
                  <FontAwesomeIconStyled icon={faPhone} flip="horizontal" />
                  {phone}
                </span>
                <span>
                  <FontAwesomeIconStyled icon={faEnvelope} />
                  <a href={`mailto:${email}`}>{email}</a>
                </span>
                {/*
                <span>
                  <FontAwesomeIconStyled icon={faFilePdf} />
                  <a href="#">Download Brochure</a>
                </span>
                */}
              </address>
            </FooterWidgetStyled>
          </div>
          <div className="col-md-4">
            <h5 className="primary-color mb-20">Servizi</h5>
            <FooterPracticeAreasListStyled className="fa-ul">
              <li>
                <FontAwesomeIconPracticeAreasListItemStyled />
                Immigrazione
              </li>
              <li>
                <FontAwesomeIconPracticeAreasListItemStyled />
                Diritto Civile
              </li>
              <li>
                <FontAwesomeIconPracticeAreasListItemStyled />
                Diritto Tributario
              </li>
            </FooterPracticeAreasListStyled>
          </div>
          <div className="col-lg-4">
            <FooterWidgetStyled>
              <h5 className="primary-color mb-20">Newsletter</h5>
              <p>Iscriviti alla nostra newsletter per ricevere le ultime novità, aggiornameti e offerte speciali.</p>
              <FooterNewsletterStyled action="blank.php" className="row" method="post" name="form_subscribe">
                <div className="col text-center">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="inserisci la tua email"
                      aria-label="inserisci la tua email"
                      aria-describedby="newsletter-subscribe"
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      id="newsletter-subscribe"
                      aria-label="Iscriviti"
                    >
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </button>
                  </div>
                </div>
              </FooterNewsletterStyled>
              <small className="d-inline-block">La tua email è al sicuro con noi. Non facciamo spam.</small>
            </FooterWidgetStyled>
          </div>
        </div>
      </div>
      <FooterSubfooterStyled>
        <div className="container">
          <div className="row">
            <div className="col-md py-2 py-md-0">&copy; Copyright 2021 - Avvocato Luisa Parrotta</div>
            <div className="col-md py-2 py-md-0">
              <div className="text-md-end">
                <FontAwesomeIconSocialStyled href={facebook} target="_blank" rel="noopener" aria-label="facebook">
                  <FontAwesomeIconStyled icon={faFacebookF} />
                </FontAwesomeIconSocialStyled>

                <FontAwesomeIconSocialStyled href={linkedin} target="_blank" rel="noopener" aria-label="linkedin">
                  <FontAwesomeIconStyled icon={faLinkedinIn} />
                </FontAwesomeIconSocialStyled>

                <FontAwesomeIconSocialStyled href={`mailto:${email}`} aria-label="email">
                  <FontAwesomeIconStyled icon={faEnvelope} />
                </FontAwesomeIconSocialStyled>
              </div>
            </div>
          </div>
        </div>
      </FooterSubfooterStyled>
    </FooterStyled>
  );
};

export default Footer;
