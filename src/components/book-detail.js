import React from 'react';
import PropTypes from 'prop-types';

function BookDetail(props) {
  const { shelves, book, onChangeBookShelf } = props;

  return (
    <li>
      <div className="book">
        <div className="book-top">
          {book.imageLinks &&
            <div className="book-cover"
              style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}
            ></div>
          }
          <div className="book-shelf-changer">
              <select
                defaultValue={book.shelf}
                onChange={event => onChangeBookShelf(book, event.target.value)}
              >
                <option value="" disabled>Move to...</option>
                {shelves.map(shelf =>
                  <option value={shelf.id} key={shelf.id}>{shelf.name}</option>
                )}
                <option value="none">None</option>
              </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
      </div>
    </li>
  );
}

BookDetail.PropTypes = {
  shelves: PropTypes.array.isRequired,
  book: PropTypes.array.isRequired,
  onChangeBookShelf: PropTypes.func.isRequired
}

export default BookDetail;