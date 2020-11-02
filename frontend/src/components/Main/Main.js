import React, { useState } from "react";
import Header from "../Header/Header";
import Input from "../Input/Input";
import Output from "../Output/Output";

const axios = require("axios");

const Main = () => {
  const [longUrl, setLongUrl] = useState("");

  const handleInputChange = (event) => {
    setLongUrl(event.target.value);
    console.log(longUrl);
  };

  const clearOnFocus = (event) => {
    // it is changing value of input, so triggers handleInputChange and sets longUrl to ""
    event.target.value = "";
  };

  const sendLongUrl = (longUrl) => {
    // axios call to API here
    console.log("sending the long url to the api!");
    console.log("long url: " + longUrl);
    console.log("getting back a shortened one...");
  };

  // testing - get all
  const testingGetAll = () => {
    axios
      .get("http://localhost:5000/ping")
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Header />
      <Input
        watchInputChange={handleInputChange}
        sendLongUrl={() => sendLongUrl(longUrl)}
        clearOnFocus={clearOnFocus}
        /* clearOnFocus={testingGetAll} */
      />
      <Output />
    </div>
  );
};

export default Main;
