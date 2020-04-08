/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import homePageReducer from 'containers/HomePage/reducer';
import loginPageReducer from 'containers/LoginPage/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    language: languageProviderReducer,
    homePage: homePageReducer,
    loginPage: loginPageReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}
