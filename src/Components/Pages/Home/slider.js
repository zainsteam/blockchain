import React from 'react';

import {Carousel} from 'react-bootstrap';

function Sliderz() {
  return (
    <Carousel className="mt-5">
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="http://cssslider.com/sliders/demo-17/data1/images/picjumbo.com_hnck0391.jpg"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="http://cssslider.com/sliders/demo-17/data1/images/picjumbo.com_img_5948.jpg"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="http://cssslider.com/sliders/demo-17/data1/images/picjumbo.com_hanv9909.jpg"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>

       );
}

export default Sliderz;



