/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext } from 'react';
import { MdSend, MdPhone, MdEmail } from 'react-icons/md';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { ThemeContext } from 'styled-components';
import Title from '~/components/Title';
import developerLight from '~/assets/developerLight.svg';
import developerDark from '~/assets/developerDark.svg';
import { Container, Content, ContactForm, Spinner } from './styles';
import api from '~/services/api';

export default function Contact({ contactRef }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const { colors, title } = useContext(ThemeContext);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    try {
      const schema = Yup.object().shape({
        fullName: Yup.string().required('Insira seu nome!'),
        email: Yup.string()
          .email('Insira um e-mail válido!')
          .required('O e-mail obrigatório!'),
        message: Yup.string().required('Insira sua mensagem!'),
      });

      await schema.validate(
        { fullName, email, message },
        { abortEarly: false }
      );

      await api.post('sendMail', {
        fullName,
        email,
        message,
      });
      toast.success('Contato enviado com sucesso!');
      setFullName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        err.errors.map(error => {
          return toast.error(error);
        });
      }
    }
    setLoading(false);
  }

  return (
    <Container ref={contactRef}>
      <Content>
        <Title>Contato</Title>

        <ContactForm>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                name="fullName"
                type="text"
                id="full-name"
                autoComplete="off"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
              />
              <span />
              <label htmlFor="full-name">Nome Completo</label>
            </div>

            <div>
              <input
                name="email"
                type="text"
                id="email"
                autoComplete="off"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <span />
              <label htmlFor="email">E-mail</label>
            </div>

            <div>
              <textarea
                name="message"
                id="message"
                autoComplete="off"
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
              <span />
              <label htmlFor="message">Mensagem</label>
            </div>
            {!loading ? (
              <button type="submit">
                Enviar <MdSend size={20} color="#fff" />
              </button>
            ) : (
              <Spinner />
            )}
          </form>

          <div>
            <img
              src={title === 'light' ? developerLight : developerDark}
              alt="Developer"
            />
            <ul>
              <li>
                <MdPhone size={20} color={colors.primary} />
                <a href="tel:+55 51 994634296">+55 51 994634296</a>
              </li>
              <li>
                <MdEmail size={20} color={colors.primary} />
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
