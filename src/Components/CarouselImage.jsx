import React from 'react';
import '../SCSS/base.scss';
import slideone from '../assets/swiper-slide-1.jpg'
import slidetwo from '../assets/swiper-slide-2.jpg'
import Carousel from 'react-bootstrap/Carousel';

export default class CarouselImage extends React.Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={slideone}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="caption">
                            <span className="bigFont">SAVE</span>
                            <span className="wildCats">WILD CATS</span>
                            <p className="wildCatsMessage">Join Wildlife, the world’s leading charity foundation, which main goal is to help conserve and protect wild cats and other important animal species all over the globe.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={slidetwo}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <div className="caption">
                            <span className="bigFont">MAKE</span>
                            <span className="wildCats">CATS SAFE</span>
                            <p className="wildCatsMessage">We work to help wild cats and other animals worldwide and you can create their future with us. Your donations will serve the great cause of serving animals globally!</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}