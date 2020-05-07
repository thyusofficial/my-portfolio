import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing:border-box;
}

*:focus{
  outline:0;
}

html{
  font-size: 62.5%;
}

html,body, #root{
  height: 100vh;
  text-rendering: optimizelegibility;
  -webkit-font-smoothing: antialiased;
}

body{
  font-size: 1.6rem;
  background: #2C2F33;
}

body, input, button{
  font-family: Consolas, 'Courier New', monospace;
}

a{
  text-decoration: none;
}

ul{
  list-style: none;
}

button{
  cursor: pointer;
}

@media(max-width:768px){
  html{
    font-size: 50%;
  }
}
`;
