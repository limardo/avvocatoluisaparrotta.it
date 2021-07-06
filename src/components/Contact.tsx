import { faChess, faEnvelopeOpenText, faFingerprint } from '@fortawesome/free-solid-svg-icons';
import React, { FormEvent } from 'react';
import styled from 'styled-components';
import { ContactData } from '../data';
import FeatureBox from './FeatureBox';

const ContactStyled = styled.section`
  position: relative;
  background: #111;
  padding-bottom: 90px;

  input[type='text'],
  textarea,
  select {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 2px;
    box-shadow: none;

    &:focus {
      color: #fff;
      background: rgba(255, 255, 255, 0.3);
      box-shadow: none;
    }

    & ~ label {
      color: #fff;
    }
  }

  textarea#message {
    height: 195px;
  }

  .was-validated .form-control:valid,
  .was-validated .form-control:invalid {
    border-bottom-style: solid;
    border-bottom-width: 1px;
  }
`;

const ContactFeaturesStyled = styled.section`
  padding-bottom: 90px;
`;

const Contact: React.FC<{ data: ContactData }> = ({ data }) => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const { slug, heading, features } = data;

  const handleSubmit = (event: FormEvent) => {
    if (formRef.current) {
      if (!formRef.current.checkValidity()) {
        // event.preventDefault();
        // event.stopPropagation();
        console.info('FORM INVALIDO');
      }

      formRef.current.classList.add('was-validated');
    }

    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <React.Fragment>
      <ContactStyled id={slug} aria-label="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2" data-aos="fade-up" data-aos-delay="200" data-aos-anchor={`#${slug}`}>
              <div className="row text-center">
                <div className="col-12">
                  <h3 className="text-light">{heading}</h3>
                </div>
              </div>

              <form
                ref={formRef}
                id="contact_form"
                className="row g-3 needs-validation"
                noValidate
                onSubmit={handleSubmit}
              >
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      className="form-control"
                      placeholder="Nome"
                      aria-label="Nome"
                      required
                    />
                    <label htmlFor="firstname">Nome</label>
                    <div className="invalid-feedback">Per favore inserisci il nome</div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      className="form-control"
                      placeholder="Cognome"
                      aria-label="Cognome"
                      required
                    />
                    <label htmlFor="lastname">Cognome</label>
                    <div className="invalid-feedback">Per favore inserisci il cognome</div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      aria-label="Email"
                      required
                      pattern="(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\x22(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\x22)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])"
                    />
                    <label htmlFor="email">Email</label>
                    <div className="invalid-feedback">Per favore inserisci una email</div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className="form-control"
                      placeholder="Telefono"
                      aria-label="Telefono"
                      required
                      pattern="\+?[0-9]+"
                    />
                    <label htmlFor="phone">Telefono</label>
                    <div className="invalid-feedback">Per favore inserisci un telefono</div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      placeholder="Messaggio"
                      aria-label="Messaggio"
                      required
                    />
                    <label htmlFor="message">Messaggio</label>
                    <div className="invalid-feedback">Per favore inserisci un messaggio</div>
                  </div>
                </div>

                <div className="col-12 text-center">
                  <button type="submit" id="send_message" className="btn btn-custom">
                    Invia
                  </button>
                </div>

                {/*
              <div id="mail_success" className="success">
                Your message has been sent successfully.
              </div>

              <div id="mail_fail" className="error">
                Sorry, error occured this time sending your message.
              </div>
              */}
              </form>
            </div>
            <div className="col-lg-4" />
          </div>
        </div>
      </ContactStyled>

      <ContactFeaturesStyled aria-label="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <FeatureBox title={features[0].title} icon={faEnvelopeOpenText}>
                {features[0].paragraph}
              </FeatureBox>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <FeatureBox title={features[1].title} icon={faChess}>
                {features[1].paragraph}
              </FeatureBox>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
              <FeatureBox title={features[2].title} icon={faFingerprint}>
                {features[2].paragraph}
              </FeatureBox>
            </div>
          </div>
        </div>
      </ContactFeaturesStyled>
    </React.Fragment>
  );
};

export default Contact;
