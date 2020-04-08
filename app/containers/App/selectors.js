import { createSelector } from 'reselect';

const selectRouter = (state) => state.router;
const selectLoginPage = (state) => state.loginPage;

const makeSelectApp = createSelector(
    selectRouter,
    selectLoginPage,
    (routerState, selectLogin) => ({
      ...routerState.location,
      ...selectLogin,
    }),
  );

export default makeSelectApp;
