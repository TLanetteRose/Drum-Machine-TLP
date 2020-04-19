import React from 'react';
import './styles/Footer.css';

import Container from 'react-bootstrap/Container';

export const Footer = () => (
    <footer className="footer">
        <Container className="footer-container">
            <p>Drum Machine App created by {" "} <a href="https://github.com/TLanetteRose">
               {" "} 
               <span>T.Lanette Pollard</span></a> &nbsp; FreeCodeCamp Front End Libraries Project</p>
        </Container>
    </footer>
);