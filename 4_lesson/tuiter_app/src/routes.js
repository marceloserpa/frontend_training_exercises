import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home';
import Timeline from './components/timeline';
import SigninForm from './components/signin_form';
import require_authentication from './components/require_authentication';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/timeline" component={require_authentication(Timeline)} />
    <Route path="/signin" component={SigninForm} />
  </Route>
);
