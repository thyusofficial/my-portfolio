import styled, { keyframes } from 'styled-components';
import { lighten, darken } from 'polished';

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
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

export const ContactForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: calc(50% - 10px);

    div {
      position: relative;
      margin: 20px 0;
      width: 100%;
      height: 45px;

      label {
        position: absolute;
        top: 0;
        left: 0;
        font-size: 1.8rem;
        padding: 10px 5px;
      }

      input:focus ~ label,
      textarea:focus ~ label,
      input:not([value='']) ~ label,
      textarea:not(:empty) ~ label {
        font-size: 1.4rem;
        transform: translateY(-30px);
        transition: all 0.2s ease;
      }

      input,
      textarea {
        color: ${props => props.theme.colors.text};
        width: 100%;
        height: 100%;
        font-size: 1.8rem;
        padding: 10px 5px;
        border: none;
        background: none;
        resize: none;
        border-bottom: 2px solid ${props => props.theme.colors.secundary};
      }

      span {
        position: absolute;
        top: 95%;
        left: 0;
        width: 0;
        height: 3px;
        background: ${props => props.theme.colors.primary};
      }

      input:focus ~ span,
      textarea:focus ~ span {
        width: 100%;
        transition: all 0.2s;
      }
    }

    button {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 45px;
      width: 100%;
      padding: 10px 5px;
      background: ${props => props.theme.colors.primary};
      font-size: 1.8rem;
      color: #fff;
      font-weight: bold;
      border: none;
      border-radius: 4px;
      transition: all 0.2s ease 0s;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

      &:hover {
        transform: translateY(-5px);
        background: ${props =>
          props.theme && darken(0.05, props.theme.colors.primary)};
      }

      svg {
        margin-left: 10px;
      }
    }
  }

  > div {
    width: calc(50% - 10px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ul {
      li {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 10px 0;

        a {
          font-size: 1.8rem;
          line-height: 2.8rem;
          margin-left: 10px;
          color: ${props => props.theme.colors.text};
          transition: color 0.2s ease;

          &:hover {
            color: ${props => props.theme.colors.primary};
          }
        }
      }
    }
  }

  @media (max-width: 1110px) {
    flex-direction: column;
    justify-content: space-between;

    form {
      width: 100%;
    }

    > div {
      width: 100%;
      align-items: center;
      margin-top: 30px;

      img {
        width: 50%;
      }
    }
  }
`;

export const Spinner = styled.span`
  align-self: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid;
  border-color: #7289da ${lighten(0.2, '#2c2f33')} ${lighten(0.2, '#2c2f33')};
  animation: ${rotate} 1s infinite linear;
`;
