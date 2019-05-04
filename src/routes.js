import React from "react";
import T from "prop-types";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Desire from "./Desire";
import Collage from "./Collage";

const RouterApp = ({ children }) => (
  <Router>
    {children}
    <Route exact path="/" render={() => <Redirect to="/desire" />} />
    <Route path="/desire" component={Desire} />
    <Route path="/collage" component={Collage} />
  </Router>
);

RouterApp.propTypes = {
  children: T.node.isRequired
};

export default RouterApp;
