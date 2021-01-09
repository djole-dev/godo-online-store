import React from "react";
import "./ProductSection.css";

import FiberNewTwoToneIcon from "@material-ui/icons/FiberNewTwoTone";

import ProductComponent from "../../components/product-component/ProductComponent";
import { Fireplace } from "@material-ui/icons";

function ProductSection() {
  return (
    <div className='product_section_column'>
      <div className='product_header'>
    
        <h3>New Arrivals</h3>
      </div>

      <div className='product_section'>
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
      </div>

      <div className='product_section'>
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
      </div>

      <div className='product_section'>
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
      </div>
    </div>
  );
}

export default ProductSection;
