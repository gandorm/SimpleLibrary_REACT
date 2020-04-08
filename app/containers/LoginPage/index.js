/**
 *
 * LoginPage
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import LoginForm from 'components/LoginForm';

import makeSelectLoginPage from './selectors';
import {
  withRouter
} from 'react-router-dom'

import { login } from './actions';

class LoginPage extends Component {
  goLogin = (event) => {
    // wykonuje funckje login (zapytanie do api zaimplementowane w pliku actions.js) nastepnie, w przypadku sukcesu przekierowuje na dashboard
    // prosze pokazac odpowiedni komunikat w przypadku bledu
    this.props.login(event).then(() => {
      this.props.history.push("/dashboard");
    })
  }

  render() {
    return (
      // Prosze pamietac o dodaniu w tym miejscu odpowiedniego layoutu bootstrapowego oraz tytułu strony (prosze, aby byl utworzony za pomocą intl)
      // połączenie z api proszę zrealizować w pliku actions.js
      <LoginForm onSubmit={this.goLogin} />
    )
  }
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
    login,
  };

const withConnect = connect(
  makeSelectLoginPage,
  mapDispatchToProps,
);

export default withRouter(compose(withConnect)(LoginPage));
