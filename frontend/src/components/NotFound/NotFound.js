import React from "react";
import { Link } from "react-router-dom";
import notFoundBlob from "../../assets/404-blob.svg";

import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="overlay-wrap">
      <div className="overlay not-found">
        <h1>Oops, there's nothing here!</h1>
        <h3>We looked everywhere, but we couldn't find this URL...</h3>
        <img
          src={notFoundBlob}
          alt="blob with magnifying glass and question marks"
        />
        <Link to="/">Back to Cut My Url</Link>
      </div>
    </div>
  );
};

export default NotFound;
