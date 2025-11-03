import React from "react";
import Book from "./Book";
import booksData from "./books";

function BookList() {
  return (
    <div className="book-list">
      {booksData.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
}


export default BookList;
