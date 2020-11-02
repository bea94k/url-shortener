import React, { useState } from "react";
import Header from "../Header/Header";
import Input from "../Input/Input";
import Output from "../Output/Output";

const Main = () => {
  const [longUrl, setLongUrl] = useState("");

  const handleInputChange = (event) => {
    setLongUrl(event.target.value);
    console.log(longUrl);
  };

  return (
    <div>
      <Header />
      <Input watchInputChange={handleInputChange} />
      <Output />
    </div>
  );
};

export default Main;
