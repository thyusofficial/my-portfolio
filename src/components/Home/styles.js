import styled from 'styled-components';

export const Container = styled.section`
  margin-left: 250px;
  min-height: 100%;
  height: 100%;

  @media (max-width: 768px) {
    margin-left: 0;
    transition: all 0.5s;
  }
`;

export const Content = styled.div`
  max-width: 980px;
  width: 90%;
  height: 100%;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 4rem;
    line-height: 5rem;
    font-weight: 700;
    text-align: center;

    span {
      color: ${props => props.theme.colors.primary};
    }
  }

  p {
    margin: 15px 0;
    font-size: 1.8rem;
    line-height: 2.8rem;
    text-align: center;
  }

  div {
    display: flex;
    justify-content: space-evenly;
    width: 100%;

    a {
      border: 2px solid transparent;
      padding: 15px;
      border-radius: 50%;
    }

    a:hover {
      transition: all 0.2s;
      border: 2px solid ${props => props.theme.colors.primary};
    }
  }
`;
