import React from 'react'
import './ProductComponent.css';
import Logo from "./product.png";
function ProductComponent() {
    return (
    <div className="product">
        <div className="product-image">
            <img src={Logo} height="200px" alt="logo"/>
        </div>
        <div className="product-content">
           <h3>Wireless Headphones</h3>
           <h2 className="product-price">$40.<small>99</small></h2>
           <a href="#" className="product-buy">Buy Now</a>
        </div>
        
    </div>
    )
}

export default ProductComponent
