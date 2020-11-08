import React from "react";
import Button from "../Button/Button";

import "./Input.css";

const Input = (props) => {
  // hitting Enter key triggers same action as clicking the button
  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      props.triggerPostingUrl();
    }
  };

  return (
    <div className="input-wrapper">
      <input
        type="text"
        onChange={props.watchInputChange}
        onFocus={props.clearOnFocus}
        onKeyUp={handleKeyUp}
      ></input>
      <Button text="Make it short!" onClick={props.triggerPostingUrl} />
    </div>
  );
};

export default Input;
