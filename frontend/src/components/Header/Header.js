import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>
        <span>C</span>ut <span>My U</span>rl
      </h1>
      <h3>
        Tired of 100-character-long URLs? Cut them down - here at{" "}
        <span>cmyu</span>.herokuapp.com!
      </h3>
    </div>
  );
};

export default Header;
