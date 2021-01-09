import React from "react";
import "./NavigationBarSection.css";

import Logo from "./logo.png";

import { Link } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function NavigationBarSection() {
  return (
    <div className='navigation'>
      <Link to='/' style={{ textDecoration: "none" }}>
        <img className='navigation_logo' src={Logo}></img>
      </Link>

      <div className='navigation_search'>
        <input className='navigation_searchInput' type='text' />
        <SearchIcon className='navigation_searchIcon' />
      </div>

      <div className='navigation_nav'>
        <Link to='/login' style={{ textDecoration: "none" }}>
          <div className='navigation_option'>
            <span className='navigation_optionLineOne'>Sign In</span>
            <span className='navigation_optionLineTwo'>Create account</span>
          </div>
        </Link>

        <Link to='/categories' style={{ textDecoration: "none" }}>
        <div className='navigation_option'>
          <span className='navigation_optionLineOne'>Categories</span>
          <span className='navigation_optionLineTwo'>& Subcategories</span>
        </div>
        </Link>

        <Link to='/orders' style={{ textDecoration: "none" }}>
        <div className='navigation_option'>
          <span className='navigation_optionLineOne'>Orders</span>
          <span className='navigation_optionLineTwo'>& Returns</span>
        </div>
        </Link>

        <Link to='/basket' style={{ textDecoration: "none" }}>
          <div className='navigation_optionBasket'>
            <ShoppingBasketIcon />
            <span className='navigation_optionLineTwo navigation_basketCount'>
              0
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NavigationBarSection;
