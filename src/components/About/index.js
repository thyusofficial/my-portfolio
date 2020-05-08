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
        <Title>Sobre mim</Title>
        <Informations>
          <div>
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
              finibus nisl, a dignissim quam. Sed condimentum ullamcorper ex ut
              tristique. Sed blandit, nibh in varius accumsan, libero mi
              tincidunt elit, in mattis risus massa eget felis.
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
