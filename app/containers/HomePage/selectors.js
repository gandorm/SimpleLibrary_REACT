import { createSelector } from 'reselect';

/**
 * Direct selector to the lhomePage state domain
 */

const selectHomePageDomain = (state) => state.homePage;
const selectLoginPageDomain = (state) => state.loginPage;

/**
 * Other specific selectors
 */

/**
 * Default selector used by HomePage
 */

const makeSelectHomePage = createSelector(
    selectHomePageDomain,
    selectLoginPageDomain,
    (homePage, loginPage) => ({
      ...homePage,
      ...loginPage,
    })
  );

export default makeSelectHomePage;
export { selectHomePageDomain };
