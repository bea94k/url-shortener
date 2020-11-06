import React, { useState } from "react";
import Header from "../Header/Header";
import Input from "../Input/Input";
import Output from "../Output/Output";

const axios = require("axios");

const hostname =
  process.env.NODE_ENV === "local"
    ? `http://localhost:${process.env.PORT}`
    : "https://shortyshortyshorty.herokuapp.com";

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
    axios
      .post(`${hostname}/shortenme`, { originalUrl: longUrl })
      .then((resp) => {
        setResponseFromApi(resp.data);
      })
      .catch((error) => {
        // all response with codes 4** and 5** comes here
        if (error.response) {
          setErrorFromApi(error.response.data.message);
        } else {
          setErrorFromApi(error.message);
        }
      });
  };

  return (
    <div>
      <Header />
      <Input
        watchInputChange={handleInputChange}
        triggerPostingUrl={() => sendLongUrl(longUrl)}
        clearOnFocus={clearOnFocus}
      />
      <Output
        shortUrl={responseFromApi}
        error={errorFromApi}
        hostname={hostname}
      />
    </div>
  );
};

export default Main;
