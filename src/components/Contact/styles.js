import styled from 'styled-components';
import { lighten, darken } from 'polished';

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
        color: ${lighten(0.2, '#2c2f33')};
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
        color: #7289da;
      }

      input,
      textarea {
        width: 100%;
        height: 100%;
        font-size: 1.8rem;
        padding: 10px 5px;
        border: none;
        background: none;
        color: #fff;
        resize: none;
        border-bottom: 2px solid ${lighten(0.2, '#2c2f33')};
      }

      span {
        position: absolute;
        top: 95%;
        left: 0;
        width: 0;
        height: 3px;
        background: #7289da;
      }

      input:focus ~ span,
      textarea:focus ~ span {
        width: 100%;
        transition: all 0.2s;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 45px;
      width: 100%;
      padding: 10px 5px;
      background: #7289da;
      color: #fff;
      font-size: 1.8rem;
      font-weight: bold;
      border: none;
      border-radius: 4px;
      transition: all 0.2s ease 0s;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

      svg {
        margin: 0 15px;
      }

      &:hover {
        transform: translateY(-5px);
        background: ${darken(0.05, '#7289da')};
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
          color: ${lighten(0.2, '#2c2f33')};
          margin-left: 10px;

          &:hover {
            color: #7289da;
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
