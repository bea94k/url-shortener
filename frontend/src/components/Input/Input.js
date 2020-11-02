import React from "react";
import Button from "../Button/Button";

const Input = (props) => {
  const printTadaa = () => console.log("ta-daaah!");
  return (
    <div>
      <input type="text" onChange={props.watchInputChange}></input>
      <Button text="henlo" onClick={printTadaa} />
    </div>
  );
};

export default Input;
