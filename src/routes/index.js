import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Add from '../pages/Add';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/add" component={Add} />
  </Switch>
);

export default Routes;
