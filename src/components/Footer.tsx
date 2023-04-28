import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faCheck, faLongArrowAltRight, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { useRecaptcha } from '../hooks/useRecaptcha';
import LogoLightSvg from '../images/logo-light.svg';

const query = graphql`
  query FooterQuery {
    site {
      siteMetadata {
        phone
        email
        linkedin
        facebook
        googleRecaptchaSitekey
      }
    }
  }
`;

const FontAwesomeIconStyled = styled(FontAwesomeIcon)``;

const FontAwesomeIconPracticeAreasListItemStyled = styled(FontAwesomeIcon).attrs({ icon: faCheck })``;

const FontAwesomeIconSocialStyled = styled.a`
  display: inline-flex;
  width: 34px;
  height: 34px;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 2px;
  margin: 0 5px;
  background-color: var(--primary-color);
  font-size: 16px;
  text-align: center;
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
    margin-top: 0;
    font-size: 18px;
    letter-spacing: normal;
  }

  .logo {
    width: 200px;
    max-width: 200px;
    height: auto;
  }

  address {
    margin-top: 20px;

    span {
      display: block;
      padding: 0;
      border-radius: 300px;
      margin: 0;
      background: none;
      font-size: 15px;
      line-height: 1.7em;

      a {
        color: #fff;
      }

      ${FontAwesomeIconStyled} {
        margin: 5px 15px 0 5px;
        color: var(--primary-color);
        font-size: 15px;
      }
    }
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  a:hover {
    color: var(--primary-color);
  }

  .info {
    display: inline-block;
    clear: both;
  }

  .error {
    display: none;
    clear: both;
    color: #e7505a;
  }

  .success {
    display: none;
    clear: both;
    color: #96c346;
  }
`;

const FooterPracticeAreasListStyled = styled.ul`
  padding: 0;
  margin: 0 0 60px;

  li {
    margin: 5px 0;

    ${FontAwesomeIconPracticeAreasListItemStyled} {
      margin-right: 15px;
      background: #111;
      color: var(--primary-color);
      font-size: 12px;
    }
  }
`;

const FooterNewsletterStyled = styled.form`
  input[type='text'] {
    display: table-cell;
    width: 80%;
    padding: 9px 12px;
    border: solid 1px #333;
    border-radius: 2px 0 0 2px;
    border-right: none;
    background: rgb(255 255 255 / 10%);
    box-shadow: 2px 2px 20px 0 rgb(20 20 20 / 5%);
    color: #fff;
    float: left;
    outline: none;
    transition: 0.7s;

    &:focus {
      background: #fff;
      color: #111;
    }
  }

  #newsletter-subscribe {
    border-color: #333;
    background: var(--primary-color);
    color: #fff;
  }
`;

const FooterSubfooterStyled = styled.div`
  padding: 20px 0;
  border-top: solid 1px rgb(255 255 255 / 10%);
  margin-top: 40px;
`;

const FooterStyled = styled.footer`
  padding: 80px 0 0;
  background: #111;
  color: #fff;
  font-size: 14px;

  h1,
  h2,
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
    color: #fff;
    text-decoration: none !important;
  }

  .mb-20 {
    margin-bottom: 20px;
  }
`;

const Footer: React.FC<any> = () => {
  const {
    site: {
      siteMetadata: { phone, email, linkedin, facebook, googleRecaptchaSitekey }
    }
  } = useStaticQuery(query);
  const emailRef = React.useRef<HTMLInputElement>(null);
  const execute = useRecaptcha(!!googleRecaptchaSitekey);

  const handleSubscribe = async () => {
    if (emailRef.current) {
      if (emailRef.current.checkValidity()) {
        const send = document.querySelector('#newsletter-subscribe');
        const info = document.querySelector('#newsletter_info');
        const success = document.querySelector('#newsletter_success');
        const fail = document.querySelector('#newsletter_fail');

        try {
          if (send) {
            send.setAttribute('disabled', 'disabled');
          }

          if (info) {
            info.classList.remove('d-none');
          }

          if (fail) {
            fail.classList.remove('d-block');
          }

          const result = await execute('newsletter');

          if (!result) {
            throw new Error();
          }

          const response = await fetch('/scripts/newsletter', {
            method: 'POST',
            mode: 'same-origin',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({
              email: emailRef.current.value,
              token: result
            })
          });

          if (!response.ok) {
            throw new Error();
          }

          if (info) {
            info.classList.add('d-none');
          }

          if (success) {
            success.classList.add('d-block');
          }
        } catch (e) {
          if (send) {
            send.removeAttribute('disabled');
          }

          if (info) {
            info.classList.add('d-none');
          }

          if (fail) {
            fail.classList.add('d-block');
          }
        }
      }
    }
  };

  return (
    <FooterStyled>
      <div className="container" id="footer-section">
        <div className="row" data-aos="fade" data-aos-anchor="#footer-section">
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
                      ref={emailRef}
                      type="text"
                      className="form-control"
                      placeholder="inserisci la tua email"
                      required
                      pattern="(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\x22(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\x22)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])"
                      aria-label="inserisci la tua email"
                      aria-describedby="newsletter-subscribe"
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      id="newsletter-subscribe"
                      aria-label="Iscriviti"
                      onClick={handleSubscribe}
                    >
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </button>
                  </div>
                </div>
              </FooterNewsletterStyled>
              <small id="newsletter_info" className="info">
                La tua email è al sicuro con noi. Non facciamo spam.
              </small>
              <small id="newsletter_success" className="success">
                Grazie per la tua richiesta.
              </small>
              <small id="newsletter_fail" className="error">
                Spiacente, si è verificato un errore con la tua richiesta.
              </small>
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
