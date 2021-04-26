import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import StatusApp from '../StatusApp';
import Signup from '../Components/Authentication/Signup';

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={StatusApp} exact={true} />
        <Route path="/login" component={StatusApp} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
