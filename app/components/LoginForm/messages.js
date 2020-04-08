/*
 * LoginForm Messages
 *
 * This contains all the text for the LoginForm component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.LoginForm';

export default defineMessages({
  login: {
    id: `${scope}.login`,
    defaultMessage: 'Login',
  },
  loginPlaceholder: {
    id: `${scope}.loginPlaceholder`,
    defaultMessage: 'Wpisz swoj adres email',
  },
  loginAction: {
    id: `${scope}.loginAction`,
    defaultMessage: 'Zaloguj!',
  },
  password: {
    id: `${scope}.password`,
    defaultMessage: 'Hasło',
  },
  passwordPlaceholder: {
    id: `${scope}.passwordPlaceholder`,
    defaultMessage: 'Hasło',
  },
});
