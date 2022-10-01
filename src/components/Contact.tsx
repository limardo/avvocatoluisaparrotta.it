import { faChess, faEnvelopeOpenText, faFingerprint } from '@fortawesome/free-solid-svg-icons';
import { graphql, useStaticQuery } from 'gatsby';
import React, { FormEvent } from 'react';
import styled from 'styled-components';
import { ContactData, FrontmatterData } from '../data';
import { useRecaptcha } from '../hooks/useRecaptcha';
import FeatureBox from './FeatureBox';

const query = graphql`
  query ContactsPageQuery {
    site {
      siteMetadata {
        googleRecaptchaSitekey
      }
    }
    contact: mdx(frontmatter: { slug: { eq: "contact" } }) {
      frontmatter {
        title
        slug
        heading
        features {
          title
          paragraph
        }
      }
    }
  }
`;

const ContactStyled = styled.section`
  position: relative;
  padding-bottom: 90px;
  background: #111;

  textarea,
  select,
  input[type='text'] {
    border: none;
    border-radius: 2px;
    background: rgb(255 255 255 / 10%);
    box-shadow: none;
    color: #fff;

    &:focus {
      background: rgb(255 255 255 / 30%);
      box-shadow: none;
      color: #fff;
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
    border-bottom-width: 1px;
    border-bottom-style: solid;
  }

  .error {
    display: none;
    padding-top: 20px;
    clear: both;
    color: #e7505a;
  }

  .success {
    display: none;
    padding-top: 20px;
    clear: both;
    color: #96c346;
  }
`;

const ContactFeaturesStyled = styled.section`
  padding-bottom: 90px;
`;

const Contact: React.FC<any> = () => {
  const data = useStaticQuery<{
    contact: FrontmatterData<ContactData>;
    site: { siteMetadata: { googleRecaptchaSitekey: string } };
  }>(query);
  const recaptcha = !!data.site.siteMetadata.googleRecaptchaSitekey;
  const { slug, heading, features } = data.contact.frontmatter;
  const formRef = React.useRef<HTMLFormElement>(null);
  const execute = useRecaptcha(recaptcha);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    event.stopPropagation();

    if (formRef.current) {
      if (formRef.current.checkValidity()) {
        const submit = document.querySelector('#submit');
        const sendMessage = document.querySelector('#send_message');
        const success = document.querySelector('#mail_success');
        const fail = document.querySelector('#mail_fail');

        try {
          if (sendMessage) {
            sendMessage.setAttribute('disabled', 'disabled');
            sendMessage.innerHTML = 'Invio...';
          }

          if (fail) {
            fail.classList.remove('d-block');
          }

          const result = await execute('contacts');

          if (!result) {
            throw new Error();
          }

          const response = await fetch('/scripts/contacts', {
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
              firstname: formRef.current.firstname.value,
              lastname: formRef.current.lastname.value,
              email: formRef.current.email.value,
              phone: formRef.current.phone.value,
              message: formRef.current.message.value,
              token: result
            })
          });

          if (!response.ok) {
            throw new Error();
          }

          if (submit) {
            submit.remove();
          }

          if (success) {
            success.classList.add('d-block');
          }

          formRef.current.classList.add('was-validated');
        } catch (e) {
          if (sendMessage) {
            sendMessage.removeAttribute('disabled');
            sendMessage.innerHTML = 'Invia';
          }

          if (fail) {
            fail.classList.add('d-block');
          }
        }
      }
    }
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

                <div id="submit" className="col-12 text-center">
                  <button type="submit" id="send_message" className="btn btn-custom">
                    Invia
                  </button>
                </div>

                <div id="mail_success" className="success text-center">
                  Il tuo messaggio è stato inviato con successo.
                </div>

                <div id="mail_fail" className="error text-center">
                  Spiacente, si è verificato un errore nell&apos;invio del tuo messaggio.
                </div>
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
