import React, {useState} from "react";
import "./NavigationBarSection.css";

import {productsArray} from '../../Seed';
import FieldComponent from '../../components/field-component/FieldComponent';
import SpinnerComponent from '../../components/spinner-component/SpinnerComponent';
import EmptyFieldComponent from '../../components/empty-component/EmptyFieldComponent';

import Logo from "./logo.png";

import { Link } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";

function NavigationBarSection() {
  const [{basket,user}, dispatch] = useStateValue();


  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState(productsArray);

 let i =0;

  const renderFields = fields.map((field) => {
    i++;
    if(i<5){
      return (
        <FieldComponent
          key={field.id}
          title={field.name}
          description={field.description}
          input={input}
        />
      )} else  {
        return null
        ;}
      }
)


  const whatToRender = () => {
     if (input !== "" && fields.length === 0) {
      return <EmptyFieldComponent />;
    }else{
      return renderFields;
    }
    
  };




  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }; 



  return (
    <div className='navigation'>
      <Link to='/' style={{ textDecoration: "none" }}>
        <img className='navigation_logo' src={Logo}></img>
      </Link>


      
          <div className='navigation_search'>
          <input className='navigation_searchInput' type='text' placeholder='Please,start entering the text to search...' onChange={e=> (setInput(e.target.value))}/>
        <SearchIcon className='navigation_searchIcon' />
         </div>
         

        
         
    
      

      <div className='navigation_nav'>
      <Link to={!user && '/login'} style={{ textDecoration: "none" }}>
          <div onClick={handleAuthentication} className='navigation_option'>
            <span className='navigation_optionLineOne'> Hello, {!user ? "Sign in" : user.email}</span>
            <span className='navigation_optionLineTwo'>{user ? "Sign Out" : "Create account"}</span>
          </div>
        </Link>


        <Link to='/orders' style={{ textDecoration: "none" }}>
        <div className='navigation_option'>
          <span className='navigation_optionLineOne'>Orders</span>
          <span className='navigation_optionLineTwo'>& Returns</span>
        </div>
        </Link>

        <Link to='/profile' style={{ textDecoration: "none" }}>
        <div className='navigation_option'>
          <span className='navigation_optionLineOne'>My profile</span>
          <span className='navigation_optionLineTwo'>& Info</span>
        </div>
        </Link>

        <Link to='/basket' style={{ textDecoration: "none" }}>
          <div className='navigation_optionBasket'>
            <ShoppingBasketIcon />
            <span className='navigation_optionLineTwo navigation_basketCount'>
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NavigationBarSection;
