import styled, { keyframes } from 'styled-components';
import { transparentize } from 'polished';

const grow = keyframes`
  from{
      height: 0;
      opacity: 0;
    }
  50%{
      opacity: 1;
  }
  to{
    transform: translateY(-900px);
    opacity:0;
  }
`;

export const Container = styled.div`
  min-height: 100%;
  height: 100%;
  position: relative;
`;

export const Line = styled.div`
  z-index: -1;
  bottom: 0;
  position: absolute;
  background: ${props =>
    props.theme.colors.primary &&
    transparentize(0.8, props.theme.colors.primary)};
  border-radius: 4px;
  width: 5px;

  height: ${props => `${props.styles.height}px`};
  left: ${props => `${props.styles.left}%`};

  /* animation duration > delay > fill-mode */
  animation: ${grow} ${props => `${props.styles.duration}s`}
    ${props => `${props.styles.delay}s`} backwards infinite linear;
`;
