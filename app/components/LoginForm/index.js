import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import Form from 'react-bootstrap/Form';

import Button from 'components/Button';

import messages from './messages';

const LoginForm = ({ intl, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>{intl.formatMessage(messages.login)}</Form.Label>
        <Form.Control type="text" placeholder={intl.formatMessage(messages.loginPlaceholder)} />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>{intl.formatMessage(messages.password)}</Form.Label>
        <Form.Control type="password" placeholder={intl.formatMessage(messages.passwordPlaceholder)} />
      </Form.Group>
      <Button text={intl.formatMessage(messages.loginAction)} />
    </Form>
  );
}

LoginForm.propTypes = {
  intl: intlShape.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export  default injectIntl(LoginForm);
