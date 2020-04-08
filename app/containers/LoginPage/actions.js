import apiFetch from 'utils/apiFetch';
import { SET_ADMIN, SET_API_CALL_ERROR } from './constants';

 const setAdmin = () => ({
    type: SET_ADMIN,
  });

export const login = (event) => (dispatch) => {
  event.preventDefault();
  const username = event.target.elements.username.value;
  const password = event.target.elements.password.value;

  return apiFetch('http://localhost:8080/SimpleLibraryREST/login', dispatch, { username, password })
  .then((response) => {
    if (response.role === 'ADMIN') {
      dispatch(setAdmin());
    }
  });
}

// export const setApiCallError = () => ({
//   type: SET_API_CALL_ERROR,
//   open: true,
// })
