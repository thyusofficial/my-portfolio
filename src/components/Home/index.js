import React from 'react';
import { FaFacebook, FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';

import PropTypes from 'prop-types';
import { Container, Content } from './styles';

import Background from '~/components/Home/Background';

export default function Home({ homeRef }) {
  return (
    <Container ref={homeRef}>
      <Background>
        <Content>
          <h1>
            Olá, Meu nome é <span>Matheus Cardoso</span>
          </h1>
          <p>
            Sou desenvolvedor e acadêmico de ciência da computação, apaixonado
            por tecnologia e entusiasta de desenvolvimento web & mobile.
          </p>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/thyus/"
            >
              <FaLinkedinIn size={25} color="#fff" />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/thyusofficial"
            >
              <FaGithub size={25} color="#fff" />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://api.whatsapp.com/send?1=pt_BR&phone=5551994634296"
            >
              <FaWhatsapp size={25} color="#fff" />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/Thyusc"
            >
              <FaFacebook size={25} color="#fff" />
            </a>
          </div>
        </Content>
      </Background>
    </Container>
  );
}

Home.propTypes = {
  homeRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]).isRequired,
};
