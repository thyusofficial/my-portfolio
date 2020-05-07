import React, { useEffect, useState, useRef } from 'react';
import { MdBook, MdWork } from 'react-icons/md';
import PropTypes from 'prop-types';
import Title from '~/components/Title';

import {
  Container,
  Content,
  Skills,
  Skill,
  ProgressBar,
  Timeline,
} from './styles';

export default function Resume({ resumeRef }) {
  const skillsRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  function checkVisible() {
    const { top, bottom } = skillsRef.current.getBoundingClientRect();

    if (top >= 0 && bottom <= window.innerHeight) {
      setIsVisible(true);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', checkVisible, { passive: true });
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener('scroll', checkVisible);
    };
  }, []);

  return (
    <Container ref={resumeRef}>
      <Content>
        <Title>Resumo</Title>

        <Skills ref={skillsRef}>
          <Skill>
            <span>HTML</span>
            <ProgressBar skillWidth={90} isVisible={isVisible} />
          </Skill>

          <Skill>
            <span>CSS</span>
            <ProgressBar skillWidth={90} isVisible={isVisible} />
          </Skill>

          <Skill>
            <span>Javascript</span>
            <ProgressBar skillWidth={80} isVisible={isVisible} />
          </Skill>

          <Skill>
            <span>Banco de dados</span>
            <ProgressBar skillWidth={70} isVisible={isVisible} />
          </Skill>

          <Skill>
            <span>NodeJs</span>
            <ProgressBar skillWidth={60} isVisible={isVisible} />
          </Skill>

          <Skill>
            <span>ReactJs</span>
            <ProgressBar skillWidth={75} isVisible={isVisible} />
          </Skill>

          <Skill>
            <span>React native</span>
            <ProgressBar skillWidth={70} isVisible={isVisible} />
          </Skill>

          <Skill>
            <span>Bootstrap/Materialize</span>
            <ProgressBar skillWidth={90} isVisible={isVisible} />
          </Skill>
        </Skills>

        <Timeline>
          <h2>
            Educação <MdBook size={20} color="#fff" />
          </h2>

          <ul>
            <li>
              <h3>centro universitário ritter dos reis</h3>
              <time>2015-2020</time>
              <p>Bacharelado em Ciência da computação</p>
            </li>

            <li>
              <h3>colégio estadual coronel afonso emílio massot</h3>
              <time>2012-2014</time>
              <p>Ensino médio.</p>
            </li>
          </ul>
        </Timeline>

        <Timeline>
          <h2>
            Profissional <MdWork size={20} color="#fff" />
          </h2>

          <ul>
            <li>
              <h3>bc serviços</h3>
              <time>2019-2020</time>
              <p>
                Desenvolvimento full-stack de sistemas, utilizando PHP, HTML,
                Javascript, MySql e ferramentas para web.
              </p>
            </li>

            <li>
              <h3>Anapps</h3>
              <time>2019-2019</time>
              <p>
                Estágio em desenvolvimento web full-stack, dando manutenção e
                auxílio nos sistemas internos, criando novas funcionalidades e
                relatórios do banco de dados.
              </p>
            </li>

            <li>
              <h3>Saratt, Moraes & Associados</h3>
              <time>2018-2019</time>
              <p>
                Estágio na área de suporte de informática exercendo funções de
                configuração de rede, manutenção dos computadores da empresa,
                configuração de sistemas, pacotes de programas e prestando
                suporte aos colaboradores.
              </p>
            </li>
            <li>
              <h3>Antt</h3>
              <time>2015-2017</time>
              <p>
                Estágio de suporte de informática, prestando suporte a usuários,
                manutenção de computadores, configuração de hardware,software,
                sistemas e manutenção da rede interna.
              </p>
            </li>
          </ul>
        </Timeline>
      </Content>
    </Container>
  );
}

Resume.propTypes = {
  resumeRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]).isRequired,
};
