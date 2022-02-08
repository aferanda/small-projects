import React from 'react';
import Footer from './components/Footer';
import Forms from './components/Forms';
import { Main, Text } from './styles';
import './styles/global.css';

function App() {
  return (
    <>
      <Main>
        <Text>
          <h1>Learn to code by watching others</h1>
          <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.
          </p>
        </Text>
        <Forms />
      </Main>
      <Footer />
    </>
  );
}

export default App;
