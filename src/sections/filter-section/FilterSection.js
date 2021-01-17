import "./FilterSection.css";
import React, {useState} from "react";
import {useStateValue} from '../../StateProvider';
import ProductSection from '../product-section/ProductSection';

function FilterSection() {
  const [{ currentProducts }, dispatch] = useStateValue();

  const [category,setCategory]=useState("all");
  const [price,setPrice]=useState(400);
  const [starRating,setStarRating]=useState(3);
  const [deliveryTime,setDeliveryTime]=useState(6);
  const [disabled,setDisabled]= useState(true);

const priceInt=parseInt(price);
  const priceUp= parseInt(price)+100;
  const starR=parseInt(starRating);
  const deliv=parseInt(deliveryTime);
  
  const refresh = e =>{
    e.preventDefault();
    dispatch({
      type:'SET_FILTER',
      category:category,
      price: priceInt,
      star:starR,
      delivery:deliv,
      disabled:disabled
  })
  }


  const turnOnOff = e => {
    e.preventDefault();

    if(disabled===true){
      setDisabled(false);
      /*Dispatch*/

    }else{
      setDisabled(true);
    }


  }

  console.log(category,price,starRating,
    deliveryTime);



  return (
    <div className='filter'>
      <div className='filter-row'>
        <div>
          <select  className='filter-section' value={category} onChange={e=>setCategory(e.target.value)}>
           
            <option name='m'value="laptops"> Laptops</option>
            <option name='m' value="phones">Phones</option>
            <option name='m' value="tvs">TVs</option>
            <option name='m' value="computeracessories">Computer acessories</option>
            <option name='m' value="tablets">Tablets</option>
          </select>
        </div>

        <div className='filter-section'>
          <h3>Price</h3>
          <p>{price}$-{priceUp}$</p>
          <input disabled={disabled} type='range'  min={0} max={900} step={100} value={price} onChange={e=>setPrice(e.target.value)}/>
         
        </div>

        <div className='filter-section'>
          <h3>Delivery time</h3>
          <p>{deliveryTime} days</p>

          <input  disabled={disabled} type='range'  min="1" max="10" value={deliveryTime} onChange={e=> {setDeliveryTime(e.target.value)}} />
        </div>

        <div className='filter-section'>
          <h3>Star Rating</h3>
          <div className='product-rating'>
            {Array(starR)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          <input disabled={disabled} type='range'  min="1" max="5" value={starRating} onChange={e=> {setStarRating(e.target.value)}} />
        </div>
      </div>

      <div className='filter-row'>
        <button onClick={turnOnOff}>{disabled ? "Turn On FIlter":"Turn Off Filter"}</button>
        <button onClick={refresh}>Refresh</button>
      </div>

     
    </div>
  );
}

export default FilterSection;
