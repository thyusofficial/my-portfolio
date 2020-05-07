import styled, { keyframes } from 'styled-components';
import { lighten } from 'polished';

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

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.5s ease;

  @media (max-width: 768px) {
    position: fixed;
    max-width: 100%;
    width: 100%;
    max-height: 60px;
    height: 100%;
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
      opacity: 0.9;
    }

    a:hover {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    display: ${props => (props.open ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    max-height: 100%;
    max-width: 100%;
    height: 100%;
    width: 100%;

    background: rgba(35, 39, 42, 0.9);

    img {
      max-width: 40%;
    }
  }
`;

export const MenuButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    height: 100%;
    position: absolute;
    left: 80%;
    background: none;
    border: none;
  }
`;

export const MenuIcon = styled.span`
  position: relative;
  font-size: 2.8rem;
  line-height: 3.8rem;
  text-transform: uppercase;
  color: ${props => (props.open ? 'transparent' : '#fff')};
  transition: all 0.2s;

  &::before {
    position: absolute;
    top: ${props => (props.open ? '50%' : '0')};
    left: 0;
    content: '';
    width: 100%;
    height: 3px;
    background: #fff;
    transform: ${props => (props.open ? 'rotate(45deg)' : 'none')};
    transition: all 0.2s;
  }

  &::after {
    position: absolute;
    top: ${props => (props.open ? '50%' : '100%')};
    left: 0;
    content: '';
    width: 100%;
    height: 3px;
    background: #fff;
    transform: ${props => (props.open ? 'rotate(-45deg)' : 'none')};
    transition: all 0.2s;
  }
`;
