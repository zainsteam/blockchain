import React from 'react';
import Sliderz from './slider.js';
import Cardz from './cards.js';
import {Container} from 'react-bootstrap';



function Home() {
  return (
    <Container fluid="lg" className="p-0">
        <Sliderz />   
        <Cardz/>
    </Container>
       );
}

export default Home;



