import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookDetail from './book-detail';

class AddBook extends Component {
  componentDidMount() {
    this.props.searchBooks(null);
  }

  render() {
    const { shelves, searchedBooks, searchBooks, changeBookShelf } = this.props;

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={event => searchBooks(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchedBooks.length > 0 && searchedBooks.map(mapBook =>
              <BookDetail
                key={mapBook.id}
                shelves={shelves}
                book={mapBook}
                onChangeBookShelf={changeBookShelf}
              />
            )}
          </ol>
        </div>
      </div>
    );
  }
}

AddBook.PropTypes = {
  shelves: PropTypes.array.isRequired,
  searchedBooks: PropTypes.array.isRequired,
  searchBooks: PropTypes.func.isRequired,
  changeBookShelf: PropTypes.func.isRequired
}

export default AddBook;