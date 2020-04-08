import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { getBooks, addBook, deleteBook } from './actions';
import makeSelectHomePage from './selectors';
import { connect } from 'react-redux';

class HomePage extends Component {

  componentDidMount() {
    // po zamontowaniu komponentu wykonuje funckje getBooks
    this.props.getBooks();
  }

  render() {
    return (
      <div>
        {/* Tutaj powinna zostac wyswietlona lista ksiazek. Prosze stworzyc komponent wyswietlajacy pojedynacza pozycje nastepnie wyswietlić je za pomocą funkcji map:        
        {
              this.props.books.map((book, index) =>
                <SingleBook
                  key={book.id}
                  author={book.author}
                  title={book.title}
                  deleteBook={() => this.props.deleteBook(book.id)}
                />)
            }
        W komponencie zaimplementowane zostało pobieranie ksiazek w metodzie lifecyctle (componentDidMount). Funkcje wykonujące zapytanie do API znajdują się w pliku actions.js

        Prosze pamiętać również o dodaniu w tym miejscu formularza umozliwiajacego dodanie nowej książki
        */}
      </div>
    )
  }
}

HomePage.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  classes: PropTypes.object.isRequired,
  getBooks: PropTypes.func.isRequired,
  addBook: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool,
};

HomePage.defultProps = {
  isAdmin: false,
  books: [],
}

const mapDispatchToProps = {
    getBooks,
    addBook,
    deleteBook,
  };

const withConnect = connect(
  makeSelectHomePage,
  mapDispatchToProps,
);

export default (compose(withConnect)(HomePage));
