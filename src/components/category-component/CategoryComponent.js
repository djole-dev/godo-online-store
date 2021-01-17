import React from "react";
import "./CategoryComponent.css";
import { Link } from "react-router-dom";
import { useStateValue} from '../../StateProvider';

function CategoryComponent({ title, image, category }) {
  const [{currentProducts}, dispatch]= useStateValue();

  const refreshProducts = () => {   
   dispatch({
     type:"CHANGE_PRODUCTS",
     item: category
   })

   console.log(currentProducts);
  }
  return (
    <div className='categoryComponent'>
      <div className='categoryComponent-content'>
        <h3>{title}</h3>
      </div>
      <div className='categoryComponent-image'>
        <img src={image} height='200px' alt='logo' />
      </div>

      <div className='categoryComponent-shopNow'>
        <Link to='/products' style={{ textDecoration: "none" }}>
          <p onClick={refreshProducts}>Shop Now</p>
        </Link>
      </div>
    </div>
  );
}

export default CategoryComponent;
