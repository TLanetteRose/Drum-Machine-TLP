import React from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';

import {Header} from '../src/components/Header';
import {Footer} from '../src/components/Footer';
import {DrumMachine} from '../src/components/DrumMachine';



class App extends React.Component {
  

  render(){
    return (
      <div>
        <Container id="drum-machine" className="container">
          <Header />
          <DrumMachine />

          
          <Footer />
        </Container>
      </div>
    )
  }
};

export default App
