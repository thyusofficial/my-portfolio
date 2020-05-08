import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import { Container, Content, Logo, MenuButton } from './styles';

export default function Menu({ homeRef, aboutRef, resumeRef, contactRef }) {
  const [open, setOpen] = useState(false);

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
        <img
          src="https://ui-avatars.com/api/?background=7289DA&color=fff&name=Matheus+Cardoso&size=300"
          alt="Avatar"
        />

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
          <span>By </span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/thyus/"
          >
            Matheus Cardoso
          </a>
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
};
