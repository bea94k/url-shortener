import React from "react";

import "./Output.css";

const Output = (props) => {
  return (
    <div>
      <h4>OUTPUT</h4>
      {props.shortUrl ? (
        <p>
          {props.hostname}
          {props.shortUrl}
        </p>
      ) : null}
      {props.error ? <p>{props.error}</p> : null}
    </div>
  );
};

export default Output;
