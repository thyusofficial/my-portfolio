import React, { useState, useEffect } from 'react';

import { Container, Line } from './styles';

export default function Background({ children }) {
  const [lines, setLines] = useState([]);

  const random = (min, max) => Math.random() * (max - min) + min;

  useEffect(() => {
    if (lines.length <= 10) {
      setLines([...lines, random(1, 50)]);
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
            height: random(50, 300),
            delay: random(5, 0.1),
            duration: random(5, 10),
          }}
        />
      ))}
    </Container>
  );
}
