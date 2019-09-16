import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Home from '../Screens/Home';
import TV from '../Screens/TV';
import Search from '../Screens/Search';

export default () => {
  return (
    <Router>
      <>
        <Route path="/" exact component={Home} />
        <Route path="/tv" exact component={TV} />
        <Route path="/search" exact component={Search} />
      </>
    </Router>
  );
};
