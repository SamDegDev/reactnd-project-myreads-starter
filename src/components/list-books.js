import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookDetail from './book-detail';

function ListBooks(props) {
  const { shelves, books, changeBookShelf } = props;

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {shelves.map(shelf =>
          <div key={shelf.id}>
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf.name}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books.filter(filterBook => filterBook.shelf === shelf.id).map(mapBook =>
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
          </div>
        )}
      </div>
      <div className="open-search">
        <Link to="/search" className="add-book">Add a Book</Link>
      </div>
    </div>
  );
}

ListBooks.PropTypes = {
  shelves: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  changeBookShelf: PropTypes.func.isRequired
}

export default ListBooks;