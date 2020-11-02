import React from "react";

const Output = (props) => {
  return (
    <div>
      <h4>OUTPUT</h4>
      {props.shortUrl ? <p>{props.shortUrl}</p> : null}
      {props.error ? <p>{props.error}</p> : null}
    </div>
  );
};

export default Output;
