import React from 'react';
import { MdFileDownload } from 'react-icons/md';
import PropTypes from 'prop-types';
import Title from '~/components/Title';
import matheus from '~/assets/matheus.jpg';
import { Container, Content, Informations } from './styles';
import cv from '~/curriculum/cv.pdf';

export default function About({ aboutRef }) {
  return (
    <Container ref={aboutRef}>
      <Content>
        <Title>Sobre</Title>
        <Informations>
          <div>
            <h3>Um pouco sobre mim</h3>
            <p>
              Sou desenvolvedor, acadêmico e atuo nas áreas de desenvolvimento
              web & mobile. Gosto de aprender sobre tecnologias e ferramentas
              que estão forte no mercado assim como as melhores práticas para
              desenvolvimento de soluções rápidas e que entregam um bom
              resultado para o usuário final.
            </p>
            <ul>
              <li>
                Nome: <span>Matheus Cardoso</span>
              </li>
              <li>
                Idade: <span>23</span>
              </li>
              <li>
                Número: <span>(51) 994634296</span>
              </li>
              <li>
                Email: <span>matheus.silvacardoso10@gmail.com</span>
              </li>
              <li>
                Endereço: <span>Porto Alegre - Brasil</span>
              </li>
            </ul>

            <a href={cv} download>
              Baixar currículo
              <MdFileDownload size={20} />
            </a>
          </div>
          <div>
            <img src={matheus} alt="Avatar" />
          </div>
        </Informations>
      </Content>
    </Container>
  );
}

About.propTypes = {
  aboutRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]).isRequired,
};
