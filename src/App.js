import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListBooks from './components/list-books';
import AddBook from './components/add-book';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends Component {
  state = {
    shelvedBooks: [],
    searchedBooks: []
  }

  componentDidMount() {
    this.getShelvedBooks();
  }

  /**
  * @description Sets the status for shelvedBooks getting the data from the APIs
  */
  getShelvedBooks() {
    BooksAPI.getAll().then(books => this.setState({ shelvedBooks: books }));
  }

  /**
  * @description Changes the shelf for a book object
  * @param {object} book - The book
  * @param {string} shelf - The id of the new shelf for the books
  */
  changeBookShelf(book, shelf) {
    BooksAPI.update(book, shelf).then(req => this.getShelvedBooks());
  }

  /**
  * @description Perform a search for all available books
  * @param {string} query - The query to search for
  */
  searchBooks(query) {
    if (query && query.length > 0) {
      BooksAPI.search(query).then(searchedBooks => {
        if (!searchedBooks.error) {
          // Filter the result array for duplicates
          searchedBooks = searchedBooks.filter((filterBook, index, arrBooks) => {
            return arrBooks.map(mapBook => mapBook.id).indexOf(filterBook.id) === index;
          }).map(mapBook => {
            // Check if this book is in a specific shelf
            const matchedBook = this.state.shelvedBooks.find(findBook => findBook.id === mapBook.id);
            // Assign the matched shelf to the book, or assign none if not matched
            mapBook.shelf = matchedBook ? matchedBook.shelf : 'none';
            return mapBook;
          });
        }
        else {
          searchedBooks = [];
        }
        this.setState({ searchedBooks });
      });
    }
    else {
      this.setState({ searchedBooks: [] })
    }
  }

  render() {
    const { shelvedBooks, searchedBooks } = this.state;

    const shelves = [
      {
        id: 'currentlyReading',
        name: 'Currently Reading'
      },
      {
        id: 'wantToRead',
        name: 'Want to Read'
      },
      {
        id: 'read',
        name: 'Read'
      }
    ];

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks
            shelves={shelves}
            books={shelvedBooks}
            changeBookShelf={this.changeBookShelf.bind(this)}
          />
         )} />
        <Route path="/search" render={({ history }) => (
          <AddBook
            shelves={shelves}
            searchedBooks={searchedBooks}
            searchBooks={this.searchBooks.bind(this)}
            changeBookShelf={this.changeBookShelf.bind(this)}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp;