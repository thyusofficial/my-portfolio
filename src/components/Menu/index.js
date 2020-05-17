import React, { useState, useEffect, useContext } from 'react';
import { shade } from 'polished';
import Switch from 'react-switch';

import PropTypes from 'prop-types';

import { ThemeContext } from 'styled-components';
import matheus from '~/assets/matheus2.png';
import { Container, Content, Logo, MenuButton } from './styles';

export default function Menu({
  homeRef,
  aboutRef,
  resumeRef,
  contactRef,
  toggleTheme,
}) {
  const [open, setOpen] = useState(false);

  const { colors, title } = useContext(ThemeContext);

  function handleOpen() {
    setOpen(!open);
  }

  function handleMenuOption(ref) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'initial';
  }, [open]);

  return (
    <Container>
      <Logo href="/">Matheus Cardoso</Logo>

      <Content open={open}>
        <div>
          <img src={matheus} alt="Avatar" />
        </div>

        <ul>
          <li>
            <button type="button" onClick={() => handleMenuOption(homeRef)}>
              Home
            </button>
          </li>
          <li>
            <button type="button" onClick={() => handleMenuOption(aboutRef)}>
              Sobre
            </button>
          </li>
          <li>
            <button type="button" onClick={() => handleMenuOption(resumeRef)}>
              Resumo
            </button>
          </li>
          <li>
            <button type="button" onClick={() => handleMenuOption(contactRef)}>
              Contato
            </button>
          </li>
        </ul>

        <footer>
          <span>Tema selecionado</span>
          <Switch
            checked={title === 'dark'}
            onChange={toggleTheme}
            height={10}
            width={40}
            handleDiameter={20}
            checkedIcon
            uncheckedIcon={false}
            onColor={shade(0.1, colors.primary)}
            offColor={shade(0.1, colors.primary)}
          />
        </footer>
      </Content>

      <MenuButton type="button" onClick={handleOpen} open={open}>
        <span />
        <span>Menu</span>
        <span />
      </MenuButton>
    </Container>
  );
}

Menu.propTypes = {
  homeRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]).isRequired,

  aboutRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]).isRequired,

  resumeRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]).isRequired,

  contactRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]).isRequired,

  toggleTheme: PropTypes.func.isRequired,
};
