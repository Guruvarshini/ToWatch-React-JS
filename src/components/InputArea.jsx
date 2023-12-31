import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input
        onChange={(event) => {
          props.inputed(event);
        }}
        type="text"
        value={props.item}
      />
      <button
        onClick={() => {
          props.added();
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
