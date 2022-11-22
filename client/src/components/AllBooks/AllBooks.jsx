import React from "react";
import { getAllBooks } from "../../api/requests";
import { useState, useEffect } from "react";
import classes from "./AllBooks.module.css";
import Book from "../Book/Book";
import LoadingEffect from "../../UI/Loader/LoadingEffect";

const AllBooks = ({ getTheBook }) => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllBooksList();
  }, []);

  const getAllBooksList = async () => {
    const { data } = await getAllBooks();
    setBooks(data);
    
    setIsLoading(false);
  };

  return (
    <div className={classes.books}>
      {!isLoading ? (
        books.map((book, index) => (
          <>
            <Book
              id={book.id}
              title={book.title}
              author={book.author}
              key={index}
              getTheBook={getTheBook}
              settingsMode={false}
            />
          </>
        ))
      ) : (
        <LoadingEffect />
      )}
    </div>
  );
};

export default AllBooks;
