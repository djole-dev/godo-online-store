import React from 'react';
import "./BasketProductComponent.css";
import {useStateValue} from '../../StateProvider';

import Product from './product.png';

function BasketProductComponent({id,title,image,price,hideButton}) {
    const [{basket}, dispatch]= useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id: id
        })
    }

    return (
        <div className="basketProduct">
            <img className="basketProduct_image" src={image}/>
            <div className="basketProduct_info">
                <p className="basketProduct_title">{title}</p>
                <p className="basketProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                {!hideButton &&  <button onClick={removeFromBasket}>Remove from basket</button>}
                
            </div>
        </div>
    )
}

export default BasketProductComponent
