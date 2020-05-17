import styled, { keyframes, css } from 'styled-components';
import { lighten } from 'polished';

const progress = width => keyframes`
  from{
    width: 0;
  }
  to{
    width: ${width}%;
  }
`;

export const Container = styled.section`
  margin-left: 250px;
  min-height: 100%;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const Content = styled.div`
  max-width: 980px;
  width: 90%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const Skills = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  grid-gap: 20px;
`;

export const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  span {
    font-weight: bold;
    font-size: 1.8rem;
    margin: 5px;
  }
`;

export const ProgressBar = styled.div`
  position: relative;
  height: 5px;
  width: 100%;
  background: ${props =>
    props.theme.colors.secundary && lighten(0.7, props.theme.colors.secundary)};
  border-radius: 4px;
  transition: width 3s;

  &::before {
    position: absolute;
    content: '';
    background: ${props => props.theme.colors.primary};
    border-radius: 4px;
    height: 5px;

    ${props =>
      props.isVisible &&
      css`
        animation: ${progress(props.skillWidth)} 0.7s ease-in-out forwards;
      `}
  }
`;

export const Timeline = styled.div`
  margin-top: 10vh;

  h2 {
    display: flex;
    align-items: center;

    svg {
      margin: 0 15px;
    }
  }

  ul {
    margin-top: 20px;

    li {
      position: relative;
      display: flex;
      flex-direction: column;
      padding: 15px 30px;
      border: 2px solid ${props => props.theme.colors.secundary};
      transition: all 0.2s ease-in-out;
      border-collapse: collapse;
      margin: 5px 0;

      h3 {
        font-weight: bold;
        font-size: 2rem;
        line-height: 3rem;
        text-transform: uppercase;
      }

      time {
        margin: 20px 0;
      }

      p {
        font-size: 1.8rem;
        line-height: 2.8rem;
      }

      &:hover {
        border: 2px solid ${props => props.theme.colors.primary};
      }

      &::before {
        position: absolute;
        content: '';
        width: 20px;
        height: 20px;
        top: 50%;
        left: -16px;
        transform: translateY(-50%);
        border: 4px solid ${props => props.theme.colors.secundary};
        border-radius: 50%;
        background: ${props => props.theme.colors.background};
        transition: all 0.2s ease-in-out;
      }

      &:hover::before {
        border: 4px solid ${props => props.theme.colors.primary};
      }
    }
  }
`;
