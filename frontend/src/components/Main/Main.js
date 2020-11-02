import React, { useState } from "react";
import Header from "../Header/Header";
import Input from "../Input/Input";
import Output from "../Output/Output";

const axios = require("axios");

const Main = () => {
  const [longUrl, setLongUrl] = useState("");
  const [responseFromApi, setResponseFromApi] = useState("");
  const [errorFromApi, setErrorFromApi] = useState("");

  const handleInputChange = (event) => {
    setLongUrl(event.target.value);
  };

  const clearOnFocus = (event) => {
    // it is changing value of input, so triggers handleInputChange and sets longUrl to ""
    event.target.value = "";
  };

  const sendLongUrl = (longUrl) => {
    // reset the response and error messages before every new shortening request
    setResponseFromApi(null);
    setErrorFromApi(null);

    // POST long url to API, receive shortened one
    console.log("sending the long url to the api...");
    console.log("long url: " + longUrl);

    axios
      .post("http://localhost:5000/shortenme", { originalUrl: longUrl })
      .then((resp) => {
        console.log("getting back a shortened one...");
        setResponseFromApi(resp.data);
      })
      .catch((err) => {
        // all response with codes 4** and 5** comes here
        setErrorFromApi(err.message);
      });
  };

  // testing - get all
  /*  const testingGetAll = () => {
    axios
      .get("http://localhost:5000/ping")
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }; */

  return (
    <div>
      <Header />
      <Input
        watchInputChange={handleInputChange}
        sendLongUrl={() => sendLongUrl(longUrl)}
        clearOnFocus={clearOnFocus}
        /* clearOnFocus={testingGetAll} */
      />
      <Output shortUrl={responseFromApi} error={errorFromApi} />
    </div>
  );
};

export default Main;
