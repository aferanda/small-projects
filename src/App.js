import React from 'react';

import './styles/globals.css';
import GlobalStyle from './styles/globals';
import Forms from './components/forms/Forms';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className='container'>
        <Header />
        <Forms />
      </div>
      <Footer />
    </>
  );
}

export default App;
