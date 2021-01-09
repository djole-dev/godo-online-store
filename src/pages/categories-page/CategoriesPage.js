import React from "react";
import "./CategoriesPage.css";
import CategoryComponent from "../../components/category-component/CategoryComponent";


/*<img
        className='categories-image'
        src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
        alt=''
      />*/ 
function CategoriesPage() {
  return (
    <div className='categories'>
        
      
      <div className='categories-header'></div>

      <div className='categories-section'>
        <CategoryComponent />
        <CategoryComponent />
        <CategoryComponent />
        <CategoryComponent />
      </div>

      <div className='categories-section'>
        <CategoryComponent />
        <CategoryComponent />
        <CategoryComponent />
        <CategoryComponent />
      </div>

      <div className='categories-section'>
        <CategoryComponent />
        <CategoryComponent />
        <CategoryComponent />
        <CategoryComponent />
      </div>
    </div>
  );
}

export default CategoriesPage;
