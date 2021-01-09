import React from "react";
import "./CategoryComponent.css";
import Logo from "./product.png";

function CategoryComponent() {
  return (
    <div className='categoryComponent'>
      <div className='categoryComponent-image'>
        <img src={Logo} height='200px' alt='logo' />
      </div>
      <div className='categoryComponent-content'>
        <h3>Wireless Headphones</h3>
      </div>
      <div className='categoryComponent-shopNow'>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

export default CategoryComponent;
