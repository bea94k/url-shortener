import React, { useState } from "react";
import Button from "../Button/Button";

import "./Output.css";

const Output = (props) => {
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipboard = (content) => {
    const dummy = document.createElement("textarea");
    dummy.value = content;
    document.body.appendChild(dummy);
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    console.log("Copied!");
    setCopySuccess("Copied!");
    setTimeout(() => setCopySuccess(""), 3000);
  };

  return (
    <div className="output-area">
      {props.shortUrl ? (
        <div className="text-and-button-wrapper">
          <div className="output-text-wrapper">
            <p>Your short url is</p>
            <p className="shortened-link">
              {props.hostname}
              {props.shortUrl}
            </p>
          </div>
          <div>
            <Button
              text="Copy short url"
              onClick={() =>
                copyToClipboard(`${props.hostname}
            ${props.shortUrl}`)
              }
            />
            <p className="copy-success">{copySuccess}</p>
          </div>
        </div>
      ) : null}
      {props.error ? (
        <div className="error-msg">
          <p>{props.error}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Output;
