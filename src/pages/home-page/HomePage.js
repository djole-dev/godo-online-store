import React from 'react';
import './HomePage.css';

import SliderSection from '../../sections/slider-section/SliderSection';
import ProductSection from '../../sections/product-section/ProductSection';
import FooterSection from '../../sections/footer-section/FooterSection';


function HomePage() {
    return (
        <div className="home-page">
           
          
            
            <ProductSection />
            <FooterSection />
            
            
        </div>
    )
}

export default HomePage
/*
<SubnavigationSection />
            <SliderSection />
            <ProductSection />
            <FooterSection />
*/ 