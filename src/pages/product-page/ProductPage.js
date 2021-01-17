import React from "react";
import ProductSection from "../../sections/product-section/ProductSection";
import "./ProductPage.css";
import { useStateValue } from "../../StateProvider";
import { productsArray } from "../../Seed";
import { FormatUnderlined } from "@material-ui/icons";

import CommentComponent from '../../components/comment-component/CommentComponent';

function ProductPage() {
  const [{ productId }, dispatch] = useStateValue();

  const products = productsArray;

  const found = productsArray.find((element) => element.id === productId);

  return (
    <div className='product-page'>
      <div className='product-page-upper'>
        <div className='product-page-left'>
          <img className='product-image' src={found.image} />
          <p>Price: {found.price}$</p>
          <div className='product-rating'>
            {Array(found.rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          <p>Delivery time: {found.delivery} days</p>
          <p>Country: {found.country}</p>
        </div>
        <div className='product-page-right'>
          <h3>{found.name}</h3>

          <p>{found.description}</p>

          <div className='product-comments'>
            <CommentComponent />
            <CommentComponent />
            <CommentComponent />
            <CommentComponent />
            
            
          </div>
          <input type="text" className="input-comment" placeholder="Enter your comment here..."/>
            <button className="send-button">Send</button>

        </div>
      </div>
      <div className='product-page-lower'>

      </div>
    </div>
  );
}

export default ProductPage;
