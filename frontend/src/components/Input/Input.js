import React from "react";
import Button from "../Button/Button";

const Input = (props) => {
  return (
    <div>
      <input
        type="text"
        onChange={props.watchInputChange}
        onFocus={props.clearOnFocus}
      ></input>
      <Button text="Make it short!" onClick={props.sendLongUrl} />
    </div>
  );
};

export default Input;