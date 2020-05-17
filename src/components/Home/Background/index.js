import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container, Line } from './styles';

export default function Background({ children }) {
  const [lines, setLines] = useState([]);

  const random = (min, max) => Math.random() * (max - min) + min;

  useEffect(() => {
    if (lines.length <= 10) {
      setLines([...lines, random(1, 2)]);
    }
  }, [lines]);

  return (
    <Container>
      {children}
      {lines.map(line => (
        <Line
          key={line}
          styles={{
            left: random(1, 99),
            height: random(50, 100),
            delay: random(3, 0),
            duration: random(5, 10),
          }}
        />
      ))}
    </Container>
  );
}

Background.propTypes = {
  children: PropTypes.element.isRequired,
};
