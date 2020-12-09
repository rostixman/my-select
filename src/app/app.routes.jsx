import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Main } from './scenes/main';
import { About } from './scenes/about';
import { NotFound } from './scenes/not-found';

export const AppRoutes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/about" component={About} />
    <Route path="*" component={NotFound} />
  </Switch>
);
