import { useState } from "react";
import debounce from "lodash.debounce";
import { Link } from "react-router-dom";
import { search } from "./BooksAPI";
import Book from "./Book";
const SearchPage = ({ booksOnShelfs, setBooksOnShelfs }) => {
  const [books, setBooks] = useState([]);

  const searchBook = debounce((bookName) => {
    if (!bookName) return setBooks([]);

    search(bookName, 10)
      .then((response) => {
        if (response.erro) return setBooks([]);
        return setBooks(response);
      })
      .catch((error) => console.log(error));
  }, 1000);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to={"/"} className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => searchBook(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {!!books.length &&
            books.map((book) => (
              <li key={book.id}>
                {
                  <Book
                    bookData={book}
                    booksOnShelfs={booksOnShelfs}
                    setBooksOnShelfs={setBooksOnShelfs}
                  ></Book>
                }
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};
export default SearchPage;
