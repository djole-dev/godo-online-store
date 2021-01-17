import React from "react";
import "./SpinnerComponent.css";
import Loader from "react-loader-spinner";

const SpinnerComponent = () => {
  return (
    <div className='spinner'>
      <div className='si'>
        <Loader type='Oval' color='#42AE70' height={13} width={13} />
        <div className='spinner_info'>Loading...</div>
      </div>
    </div>
  );
};

export default SpinnerComponent;