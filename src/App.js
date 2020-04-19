import React from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';

import {Header} from '../src/components/Header';
import {Footer} from '../src/components/Footer';
import {DrumMachine} from '../src/components/DrumMachine';
import {Display} from '../src/components/Display';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      display: String.fromCharCode(160),
      currentPadBank: bankOne 
    }
  }

  render(){
    return (
      <div>
        <Container id="drum-machine" className="container">
          <Header />
          <DrumMachine />
          <Display id="display" className="drum-display">
            <h1>{this.state.displayText}</h1>
          </Display>
          
          <Footer />
        </Container>
      </div>
    )
  }
};

export default App
