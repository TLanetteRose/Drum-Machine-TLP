import React from 'react';
import './styles/Header.css';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

export const Header = () => (
    <Jumbotron fluid className="jumbotron">
        <Container>
            <h1 className="header-title text-center">Drum Machine </h1>
            <hr />
        </Container>
    </Jumbotron>
    );