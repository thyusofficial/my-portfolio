import React from 'react';

import { ToastContainer, Slide } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import usePersistedState from './utils/usePersistedState';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import Route from './routes/Route';

import GlobalStyle from '~/styles/global';

function App() {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Route toggleTheme={toggleTheme} />
      <GlobalStyle />
      <ToastContainer autoClose={3000} transition={Slide} />
    </ThemeProvider>
  );
}

export default App;
