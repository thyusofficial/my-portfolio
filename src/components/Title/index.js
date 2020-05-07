import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Title({ children }) {
  const titleRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  function checkVisible() {
    const { top, bottom } = titleRef.current.getBoundingClientRect();

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
    <Container ref={titleRef} isVisible={isVisible}>
      <h1>{children}</h1>
    </Container>
  );
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
};
