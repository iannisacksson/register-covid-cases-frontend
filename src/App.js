import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

import GlobalStyle from './styles/global';
import ToastAnimated from './styles/toast';

const App = () => (
  <>
    <GlobalStyle />
    <ToastAnimated />
    <Router>
      <Routes />
    </Router>
  </>
);

export default App;
