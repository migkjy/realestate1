import React from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import App from './../ui/App';

const browserHistory = createBrowserHistory();

const routes = (
  <Router history={browserHistory}>
    {/* need history object as required */}
    <Route path="/" component={App} />
  </Router>
);

export default routes;
