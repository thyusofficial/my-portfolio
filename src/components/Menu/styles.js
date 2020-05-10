import styled, { keyframes } from 'styled-components';
import { lighten, darken } from 'polished';

const blink = keyframes`
  from{
    opacity: 1;
  }
  to{
    opacity: 0;
  }

`;

export const Container = styled.div`
  z-index: 900;
  position: fixed;
  height: 100%;
  max-width: 250px;
  width: 100%;
  background: #23272a;

  transition: all 0.5s ease;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    max-width: 100%;
    width: 100%;
    max-height: 60px;
    height: 100%;
    padding: 0 5%;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  font-size: 1.8rem;
  line-height: 2.8rem;

  img {
    max-width: 90%;
    width: 100%;
    margin-top: 15px;
    border-radius: 50%;
    border: 7px solid #2c2f33;
  }

  ul {
    width: 100%;

    button {
      width: 100%;
      height: 100%;
      background: none;
      border: none;

      padding: 15px 0;
      font-weight: bold;
      font-size: 2rem;
      text-transform: uppercase;
      color: ${lighten(0.2, '#2c2f33')};

      &:hover {
        color: #7289da;
      }

      &:after {
        content: '_';
        opacity: 0;
      }

      &:hover:after {
        animation: ${blink} 0.9s ease infinite;
        color: #7289da;
      }
    }
  }

  footer {
    background: #2c2f33;
    width: 100%;
    text-align: center;
    padding: 15px 0;
    color: #fff;

    a {
      color: #7289da;
      transition: all 0.2s ease;
    }

    a:hover {
      color: ${darken(0.05, '#7289da')};
    }
  }

  @media (max-width: 768px) {
    display: ${props => (props.open ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    background: rgba(35, 39, 42, 0.95);

    ul {
      button {
        color: #fff;
      }
    }

    img {
      max-width: 40%;
    }
  }
`;

export const Logo = styled.a`
  display: none;

  @media (max-width: 768px) {
    display: block;
    text-decoration: none;
    color: #fff;
    font-size: 2.8rem;
  }
`;

export const MenuButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: none;
    border: none;
    position: ${props => (props.open ? 'relative' : 'initial')};

    span {
      text-transform: uppercase;
      font-size: 2.8rem;
      color: ${props => (props.open ? 'transparent' : '#fff')};
      transition: all 0.3s ease-in-out;

      &:nth-child(1),
      &:nth-child(3) {
        width: 100%;
        height: 2px;
        background: #fff;
        position: ${props => (props.open ? 'absolute' : 'initial')};
        transition: all 0.2s ease-in-out;
      }

      &:nth-child(1) {
        transform: ${props => (props.open ? 'rotate(45deg)' : 'none')};
        top: ${props => (props.open ? '45%' : '0')};
      }

      &:nth-child(3) {
        transform: ${props => (props.open ? 'rotate(-45deg)' : 'none')};
        bottom: ${props => (props.open ? '45%' : '0')};
      }
    }
  }
`;
