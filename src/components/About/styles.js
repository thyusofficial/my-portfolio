import styled from 'styled-components';
import { darken } from 'polished';

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

export const Informations = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div:nth-child(1) {
    width: calc(50% - 10px);
    display: flex;
    flex-direction: column;
    font-size: 1.8rem;

    h3 {
      font-size: 3rem;
      margin: 10px 0;
    }

    p {
      margin: 10px 0;
    }

    ul {
      margin: 10px 0;
      font-weight: 700;

      li {
        margin: 10px 0;
        display: flex;
        color: ${props => props.theme.colors.primary};

        span {
          margin-left: 5px;
          font-weight: normal;
          color: ${props => props.theme.colors.text};
        }
      }
    }

    a {
      align-self: flex-start;

      display: flex;
      align-items: center;

      position: relative;
      text-decoration: none;
      font-weight: bold;
      background: ${props => props.theme.colors.primary};
      color: #fff;
      padding: 15px 25px;
      border-radius: 4px;
      transition: all 0.2s ease 0s;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

      &:hover {
        transform: translateY(-5px);

        background: ${props =>
          props.theme.colors.primary &&
          darken(0.05, props.theme.colors.primary)};
      }
    }
  }

  div:nth-child(2) {
    width: calc(50% - 10px);
    overflow: hidden;
    position: relative;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 100;
      content: '';
      width: 5%;
      height: 65%;
      background: ${props => props.theme.colors.primary};
      opacity: 0.8;
      transition: all 0.5s ease;
    }

    &::after {
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 100;
      content: '';
      width: 5%;
      height: 65%;
      background: ${props => props.theme.colors.primary};
      opacity: 0.8;
      transition: all 0.5s ease;
    }

    &:hover::before,
    &:hover::after {
      height: 85%;
    }

    img {
      max-width: 100%;
      transition: all 0.5s ease;

      &:hover {
        transform: scale(1.5);
      }
    }
  }

  @media (max-width: 1110px) {
    flex-direction: column-reverse;

    div:nth-child(1),
    div:nth-child(2) {
      width: 100%;
    }
  }
`;
