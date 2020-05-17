import styled, { keyframes } from 'styled-components';
import { transparentize, lighten } from 'polished';

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
  background: ${props => props.theme.colors.secundary};
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2),
    0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);

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
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
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

  > div {
    width: 200px;
    height: 200px;
    margin-top: 20px;
    position: relative;

    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      background: ${props => props.theme.colors.primary};
      opacity: 0.2;
      border-radius: 50%;
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 7px solid ${props => props.theme.colors.primary};
    }
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
      color: ${props =>
        props.theme.colors.text && lighten(0.5, props.theme.colors.text)};
      transition: all 0.2s ease;

      &:hover {
        color: ${props => props.theme.colors.primary};
      }

      &:after {
        content: '_';
        opacity: 0;
      }

      &:hover:after {
        animation: ${blink} 0.9s ease infinite;
      }
    }
  }

  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 15px 0;
    background: ${props => props.theme.colors.primary};

    span {
      margin-right: 10px;
      font-weight: 200;
      color: ${props =>
        props.theme.colors.text && lighten(0.5, props.theme.colors.text)};
    }
  }

  @media (max-width: 768px) {
    display: ${props => (props.open ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    background: ${props =>
      props.theme.colors.secundary &&
      transparentize(0.1, props.theme.colors.secundary)};

    > div {
      width: 150px;
      height: 150px;
    }
  }
`;

export const Logo = styled.a`
  display: none;

  @media (max-width: 768px) {
    display: block;
    text-decoration: none;
    font-size: 2.8rem;
    color: #fff;
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
      transition: all 0.3s ease-in-out;
      color: ${props => (props.open ? 'transparent' : '#fff')};

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
