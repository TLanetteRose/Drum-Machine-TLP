import React from 'react';
import './styles/Display.css';

import Container from 'react-bootstrap/Container';

export const Display = (props) => (
    <Container className="display-container">
        <div id={props.id} className="drumDisplay">
            <h1>{this.state.display}</h1>
        </div>
    </Container>
) 