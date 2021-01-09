import { ShoppingBasket } from "@material-ui/icons";
import React from "react";
import BasketProductComponent from "../../components/basket-product-component/BasketProductComponent";
import "./BasketPage.css";

function BasketPage() {
  return (
    <div className='basket'>
      <div className='basket_left'>
        <img
          className='basket_ad'
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt=''
        />

        <div>
          <h3>Hello, Djordje</h3>
          <h2 className='basket_title'>Your shopping basket</h2>
            <BasketProductComponent />
            <BasketProductComponent />
            <BasketProductComponent />
            <BasketProductComponent />
        </div>
      </div>

      <div className='basket_right'>
        Subototal goes here
      </div>
    </div>
  );
}

export default BasketPage;
