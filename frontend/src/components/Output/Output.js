import React from "react";

import "./Output.css";

const Output = (props) => {
  return (
    <div>
      {props.shortUrl ? (
        <div className="output-area">
          <p>Your short url is</p>
          <p className="shortened-link">
            {props.hostname}
            {props.shortUrl}
          </p>
        </div>
      ) : null}
      {props.error ? (
        <div className="output-area error-msg">
          <p>{props.error}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Output;
