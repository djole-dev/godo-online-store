import React from 'react';
import "./BasketProductComponent.css";

import Product from './product.png';

function BasketProductComponent() {
    return (
        <div className="basketProduct">
            <img className="basketProduct_image" src={Product}/>
            <div className="basketProduct_info">
                <p className="basketProduct_title">Title</p>
                <p className="basketProduct_price">
                    <small>$</small>
                    <strong>49.99</strong>
                </p>
                <button>Remove from basket</button>   
            </div>
        </div>
    )
}

export default BasketProductComponent
