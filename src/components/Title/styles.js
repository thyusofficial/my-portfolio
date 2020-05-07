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

  h1 {
    color: #fff;
    font-size: 3.5rem;
    line-height: 4.5rem;
    text-transform: uppercase;
    position: relative;
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
        background: #7289da;
        border-radius: 4px;
        top: 100%;
      `};
  }
`;
