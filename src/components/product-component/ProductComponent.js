import React from 'react'
import './ProductComponent.css';
import Logo from "./product.png";
import {useStateValue } from '../../StateProvider';
import { Link, useHistory } from 'react-router-dom';




function ProductComponent({id,title,price,image}) {
    const [ {basket} , dispatch] = useStateValue();
    const history= useHistory ();
   

    const addToBasket = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
            },
        });
    }

    const goToProduct = (event) => {
        event.preventDefault();
        dispatch({
            type:"CHANGE_PRODUCT_ID",
            item: id
        })
        history.push("/productDetails");
    }
  
    return (
    <div className="product">
        <div className="product-image">
            <img src={image} height="200px" alt="logo"/>
        </div>
        <div className="product-content">
           <h3>{title}</h3>
           <h2 className="product-price">${price}</h2>
           <div className="flex-buttons">
           <a href="#" className="product-buy" onClick={addToBasket}>Add To Cart</a>
           <a href="#" className="product-buy" onClick={goToProduct}>See More</a>
           </div>
           
           
        </div>
        
    </div>
    )
}

export default ProductComponent
