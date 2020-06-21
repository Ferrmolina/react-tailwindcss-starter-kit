import React from 'react';

import Header from './templates/header/Header';
import Main from './templates/main/Main';
import Footer from './templates/footer/Footer';

import './assets/sass/app.scss'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
