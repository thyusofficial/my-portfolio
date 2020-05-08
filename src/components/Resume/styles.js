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
  grid-template-columns: repeat(auto-fit, minmax(470px, 1fr));
  grid-gap: 20px;
`;

export const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  span {
    color: #fff;
    font-weight: bold;
    font-size: 1.8rem;
    margin: 5px;
  }
`;

export const ProgressBar = styled.div`
  position: relative;
  height: 5px;
  width: 100%;
  background: #fff;
  border-radius: 4px;
  transition: width 3s;

  &::before {
    position: absolute;
    content: '';
    background: #7289da;
    border-radius: 4px;
    /* width: ${props => props.skillWidth}%; */
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
    color: #fff;

    svg {
      margin: 0 15px;
    }
  }

  ul {
    margin-top: 20px;

    li {
      position: relative;
      color: #fff;
      display: flex;
      flex-direction: column;
      padding: 15px 30px;
      border-bottom: 2px dashed ${lighten(0.2, '#2c2f33')};
      border-left: 4px solid ${lighten(0.2, '#2c2f33')};
      transition: all 0.2s ease-in-out;

      h3 {
        font-weight: bold;
        font-size: 2rem;
        line-height: 3rem;
        text-transform: uppercase;
        color: #7289da;
      }

      time {
        color: ${lighten(0.2, '#2c2f33')};
        margin: 20px 0;
      }

      p {
        font-size: 1.8rem;
        line-height: 2.8rem;
      }

      &:hover {
        border-left: 4px solid #7289da;
      }

      &::before {
        position: absolute;
        content: '';
        width: 20px;
        height: 20px;
        top: 50%;
        left: -16px;
        transform: translateY(-50%);
        border: 4px solid ${lighten(0.2, '#2c2f33')};
        border-radius: 50%;
        background: #2c2f33;
        transition: all 0.2s ease-in-out;
      }

      &:hover::before {
        border: 4px solid #7289da;
      }
    }
  }
`;
