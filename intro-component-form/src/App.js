import React from 'react';

import './styles/globals.css';
import GlobalStyle, { Container } from './styles/globals';
import Forms from './components/forms/Forms';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Forms />
      </Container>
      <Footer />
    </>
  );
}

export default App;
