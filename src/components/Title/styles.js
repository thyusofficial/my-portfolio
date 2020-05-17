import styled, { keyframes, css } from 'styled-components';

const slide = keyframes`
  from{
    width: 0
  }
  to{
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 10% 0;
  position: relative;

  h1 {
    color: ${props => props.theme.colors.text};
    font-size: 4.5rem;
    line-height: 5rem;
    text-transform: uppercase;
    position: relative;
    z-index: 200;
  }

  h1::before {
    ${props =>
      props.isVisible &&
      css`
        animation: ${slide} 0.5s ease-in-out;
        position: absolute;
        content: '';
        width: 100%;
        height: 5px;
        background: ${props.theme.colors.primary};
        border-radius: 4px;
        top: 100%;
      `};
  }
`;
