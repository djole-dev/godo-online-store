import React from "react";
import "./FieldComponent.css";
import Highlighter from "react-highlight-words";

const FieldComponent = ({ title, description, input }) => {
  return (
    <div className='field'>
      <div className='fi'>
        <Highlighter
          className='field_text'
          highlightClassName='bolder_text'
          searchWords={[input]}
          autoEscape={true}
          textToHighlight={title}
        />
        <br />
        <Highlighter
          className='field_description'
          highlightClassName='bolder_description'
          searchWords={[input]}
          autoEscape={true}
          textToHighlight={description}
        />
      </div>
    </div>
  );
};

export default FieldComponent;