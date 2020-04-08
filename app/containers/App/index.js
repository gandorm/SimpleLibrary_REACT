import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import HomePage from 'containers/HomePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import makeSelectApp from './selectors';
import GlobalStyle from '../../global-styles';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/dashboard" component={HomePage} />
      <Route exact path="/" component={LoginPage} />
      <Route component={NotFoundPage} />
    </Switch>
    <GlobalStyle />
  </div>
);

const mapDispatchToProps = {};

const withConnect = connect(
  makeSelectApp,
  mapDispatchToProps,
);

export default compose(withConnect)(App);
