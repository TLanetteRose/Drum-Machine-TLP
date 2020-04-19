import React from 'react';
import './styles/Display.css';

import Container from 'react-bootstrap/Container';

export const Display = () => (
    <Container className="display-container">
        <div id="display" className="drumDisplay">
            <h1>{this.state.displayText}</h1>
        </div>
    </Container>
) 