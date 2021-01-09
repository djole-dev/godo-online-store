import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import "./SliderSection.css";


function SliderSection() {
    return (
        <div className="slider">
        <Carousel autoPlay={true} transitionTime={1000}  interval={3000} showThumbs={false} showStatus={false}  infiniteLoop={true}>
                <div>
                    <img className="slider_image" src="https://images.creativemarket.com/0.1.0/ps/522794/600/400/m2/fpnw/wm0/flat-product-sale-shoe-banner-p1-.jpg?1434193319&s=72b9abcf5988e11f69b7bdd277672240" />
                    <p className="legend">Adidas 30% off price</p>
                </div>
                <div>
                    <img  className="slider_image" src="https://images.creativemarket.com/0.1.0/ps/522786/600/400/m2/fpnw/wm0/flat-product-sale-mobile-banner-p1-.jpg?1434193356&s=e9533567deb2bc456f498c6e8897f9f7" />
                    <p className="legend">Flaat 10% off, buy now</p>
                </div>
                <div>
                    <img className="slider_image" src="https://image.freepik.com/free-vector/realistic-cosmetic-products-sale-advertisement_23-2148231284.jpg" />
                    <p className="legend">Sephora 75% off, only today</p>
                </div>
            </Carousel>
            </div>
    )
}

export default SliderSection;
