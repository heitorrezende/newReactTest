import "./App.css";

import { Link } from "react-router-dom";

import Shelf from "./Shelf";

function App({ refreshShelfs, booksOnShelfs, setBooksOnShelfs }) {
  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <Shelf
                    books={booksOnShelfs}
                    shelfName={"currentlyReading"}
                    setBooksOnShelfs={setBooksOnShelfs}
                    booksOnShelfs={booksOnShelfs}
                  />
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <Shelf
                    books={booksOnShelfs}
                    shelfName={"wantToRead"}
                    setBooksOnShelfs={setBooksOnShelfs}
                    booksOnShelfs={booksOnShelfs}
                  />
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <Shelf
                    books={booksOnShelfs}
                    shelfName={"read"}
                    setBooksOnShelfs={setBooksOnShelfs}
                    booksOnShelfs={booksOnShelfs}
                  />
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to={"/search"}>Add a book</Link>
        </div>
      </div>
    </div>
  );
}

export default App;
