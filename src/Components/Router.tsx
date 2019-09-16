import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "../Screens/Home";
import TV from "../Screens/TV";
import Search from "../Screens/Search";
import Header from "./Header";

export default () => {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tv" component={TV} />
          <Route path="/search" component={Search} />
          <Redirect from="*" to="/" />
        </Switch>
      </>
    </Router>
  );
};
