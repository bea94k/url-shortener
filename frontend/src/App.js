import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";

import blob1 from "./assets/blob1.svg";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <img src={blob1} alt="blob 1" className="blob blob1" />
        <div className="content-wrap">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/notfound" component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
