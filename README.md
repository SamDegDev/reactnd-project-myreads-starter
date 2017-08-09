# MyReads Project

The MyReads project is a bookshelf app that allows to select and categorise books in three different shelves: read, currently reading and want to read.

## Requirements

* node ^8.2.1
* yarn ^0.27.5 or npm ^5.3.0

## Installation

* clone the Project
```sh
  git clone https://github.com/udacity/reactnd-project-myreads-starter.git
```
* install the dependencies
```sh
  npm install
```

## Running

To start the application run one of the commands below and open your app at http://localhost:3000/

```sh
  yarn start
```
or
```sh
  npm start
```

## What You're Getting
```
+--public/
 |-- index.html - DO NOT MODIFY
 |-- favicon.ico - React Icon, You may change if you wish.
+-- src/
 +-- components/ - React Components folder
  |-- add-book.js - Page for selecting and adding a new book to the collection
  |-- book-detail.js - Page that lists the details about a single book
  |-- list-books.js - Page that provides a list of books
 +-- icons/ - Helpful images for your app. Use at your discretion.
  |-- add.svg
  |-- arrow-back.svg
  |-- arrow-drop-down.svg
 |-- App.js - This is the root of your app.
 |-- App.css - Styles for your app. Feel free to customize this as you desire.
 |-- App.test.js - Used for testing. Provided with Create React App.
 Testing is encouraged, but not required.
 |-- BooksAPI.js - A JavaScript API for the provided Udacity backend.
 Instructions for the methods are below.
 |-- index.js - You should not need to modify this file. It is used for DOM rendering only.
 |-- index.css - Global styles. You probably won't need to change anything here.
|-- .gitignore
|-- CONTRIBUTING.MD - Information about contributing to this repo.
TL;DR - Fork and clone your own version of this to use it.
|-- README.MD - This README file.
|-- SEARCH_TERMS.md - The whitelisted short collection of available search terms
for you to use with your app.
|-- package.json - npm package manager file. It's unlikely that you'll need to modify this.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

### `getAll()`
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update(book, shelf)`
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search(query, maxResults)`
* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.