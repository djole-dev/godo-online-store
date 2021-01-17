import React from "react";
import "./EmptyFieldComponent.css";
import SpeakerNotesOffIcon from "@material-ui/icons/SpeakerNotesOff";

const EmptyFieldComponent = () => {
  return (
    <div className='empty'>
      <div className='em'>
        <SpeakerNotesOffIcon className='empty_icon' />
        <div className='empty_info'>Sorry, we couldnt find anything :(</div>
      </div>
    </div>
  );
};

export default EmptyFieldComponent;