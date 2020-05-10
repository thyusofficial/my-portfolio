import React from 'react';

import { ToastContainer, Slide } from 'react-toastify';
import Route from './routes/Route';

import GlobalStyle from '~/styles/global';

function App() {
  return (
    <>
      <Route />
      <GlobalStyle />
      <ToastContainer autoClose={3000} transition={Slide} />
    </>
  );
}

export default App;
