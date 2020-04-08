import { SET_BOOKS } from './constants';
import apiFetch from 'utils/apiFetch';

export function setBooks(books) {
  return {
    type: SET_BOOKS,
    books
  };
}

export const getBooks = () => (dispatch) => (
  apiFetch('http://localhost:8080/SimpleLibraryREST/dashboard', dispatch, null, 'GET')
  .then((books) => {
    dispatch(setBooks(books));
  })
)

export const addBook = (event) => (dispatch) => {
  event.preventDefault();
  const title = event.target.elements.title.value;
  const author = event.target.elements.author.value;

  return apiFetch('http://localhost:8080/SimpleLibraryREST/dashboard', dispatch, { title, author }).then(() => dispatch(getBooks()));;
}

export const deleteBook = (id) => (dispatch) => {
  return apiFetch(`http://localhost:8080/SimpleLibraryREST/dashboard/${id}`, dispatch, null, 'DELETE').then(() => dispatch(getBooks()));
}
