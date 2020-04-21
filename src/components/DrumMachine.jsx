import React from 'react';
import './styles/DrumMachine.css';

//import  {Display}  from "./Display";


import Container from 'react-bootstrap/Container';

export const DrumMachine = () => (
    <Container className="drum-container">
        <div className="drum">
          <Display id="display" />
            
        </div>
    </Container>
) 