import React from 'react';
import { MdSend, MdPhone, MdEmail } from 'react-icons/md';
import PropTypes from 'prop-types';
import Title from '~/components/Title';
import developer from '~/assets/developer.svg';
import { Container, Content, ContactForm } from './styles';

export default function Contact({ contactRef }) {
  return (
    <Container ref={contactRef}>
      <Content>
        <Title>Contato</Title>

        <ContactForm>
          <form action="#">
            <div>
              <input type="text" id="full-name" required autoComplete="off" />
              <span />
              <label htmlFor="full-name">Nome Completo</label>
            </div>

            <div>
              <input type="email" id="email" required autoComplete="off" />
              <span />
              <label htmlFor="email">E-mail</label>
            </div>

            <div>
              <textarea id="message" required autoComplete="off" />
              <span />
              <label htmlFor="message">Mensagem</label>
            </div>

            <button type="submit">
              Enviar <MdSend size={20} color="#fff" />
            </button>
          </form>

          <div>
            <img src={developer} alt="Developer" />
            <ul>
              <li>
                <MdPhone size={20} color="#7289da" />
                <a href="tel:+55 51 994634296">+55 51 994634296</a>
              </li>
              <li>
                <MdEmail size={20} color="#7289da" />
                <a href="mailto:matheus.silvacardoso10@gmail.com">
                  matheus.silvacardoso10@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </ContactForm>
      </Content>
    </Container>
  );
}

Contact.propTypes = {
  contactRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]).isRequired,
};
