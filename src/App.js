import React from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';

import {Header} from '../src/components/Header';




class App extends React.Component {
  

  render(){
    return (
      <div>
        <Container className="container">
          <Header />
          <div id="drum-machine">

          </div>
          
        </Container>
      </div>
    )
  }
};

export default App
