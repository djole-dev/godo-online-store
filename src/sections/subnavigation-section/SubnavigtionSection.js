import React from "react";
import "./SubnavigationSection.css";

function SubnavigtionSection() {
  return (
    <div className='subnavigation'>
      <div className='subnavigation_nav'>
        <div className='subnavigation_option'>
          
          <span className='subnavigation_optionLineTwo'>Top deals</span>
        </div>

        <div className='subnavigation_option'>
      
          <span className='subnavigation_optionLineTwo'>Hot products</span>
        </div>

        <div className='subnavigation_option'>
         
          <span className='subnavigation_optionLineTwo'>New on the shop</span>
        </div>
      </div>
    </div>
  );
}

export default SubnavigtionSection;
