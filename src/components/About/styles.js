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
      color: #fff;
      margin: 10px 0;
    }

    p {
      margin: 10px 0;
      color: #fff;
    }

    ul {
      margin: 10px 0;
      color: #7289da;
      font-weight: bold;

      li {
        margin: 10px 0;
        display: flex;
      }

      span {
        margin-left: 5px;
        color: #fff;
        font-weight: initial;
      }
    }

    a {
      align-self: flex-start;

      display: flex;
      align-items: center;

      position: relative;
      text-decoration: none;
      color: #fff;
      font-weight: bold;
      background: #7289da;
      padding: 15px 25px;
      border-radius: 4px;
      transition: all 0.2s ease 0s;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

      &:hover {
        transform: translateY(-5px);
        background: ${darken(0.05, '#7289da')};
      }
    }
  }

  div:nth-child(2) {
    width: calc(50% - 10px);

    img {
      max-width: 100%;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
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
