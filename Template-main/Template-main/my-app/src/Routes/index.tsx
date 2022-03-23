import React from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import msg from '../page/msg';
import Templates from '../page/Template';
const Routes = () => (
<Switch>
  <Route path="/" exact component={msg} />
  <Route path="/templates/:id/:id_template" exact component={Templates} />
</Switch>
)

export default Routes;