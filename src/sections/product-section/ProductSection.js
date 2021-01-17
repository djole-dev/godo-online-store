import React from "react";
import "./ProductSection.css";
import {productsArray} from '../../Seed';

import { useStateValue } from "../../StateProvider";

import FiberNewTwoToneIcon from "@material-ui/icons/FiberNewTwoTone";

import ProductComponent from "../../components/product-component/ProductComponent";
import { Fireplace } from "@material-ui/icons";

/*
 <ProductComponent id="111111" title="Book: The Lean Startup" price={52.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"/>
        <ProductComponent id="111111" title="K Mixer" price={210.99} image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"/>
        <ProductComponent id="111111" title="Google Smart Watch" price={320.99} image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"/>
        <ProductComponent id="111111" title="Tesla Tablet" price={450.99} image="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-244373AC9B3C4612._V533746474_.jpg"/>
        <ProductComponent id="111111" title="Apple IPad" price={820.99} image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"/>
*/

function ProductSection() {
  const [{ currentProducts,price,delivery,starRating,filterDisabled }, dispatch] = useStateValue();

  const products = productsArray;
  console.log(starRating);

  const listItems = products?.map((product) =>{
    
   if(filterDisabled === false){
    if(currentProducts === product.category && product.price >= price && product.price <= price+100 && product.rating === starRating && delivery=== product.delivery ){
      return <ProductComponent id={product.id} title={product.name} price={product.price} image={product.image} />
     }
   }else if (filterDisabled === true){
       if(currentProducts === product.category){
         return <ProductComponent id={product.id} title={product.name} price={product.price} image={product.image} />
       }
   }
     
    
 
 
    
    
  }
  

  
);

  return (
    <div className='product_section_column'>
      <div className='product_header'>
        <h3></h3>
      </div>

      <div className='product_section'>
        
        {listItems}
        
      
      
      </div>
    </div>
  );
}

export default ProductSection;
