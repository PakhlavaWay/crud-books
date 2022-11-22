import React from "react";
import { useState, useEffect } from "react";
import classes from './AddBook.module.css';
import { addBook } from "../../api/requests";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const AddBook = () => {
  const [book, setBook] = useState({ title: "", author: "" });

  useEffect(() => {
    addNewBook();
  }, []);

  const addNewBook = async () => {
    if (book.title && book.author) {
      const result = await addBook(book);
      setBook({ title: "", author: "" });
      return result;
    }
  };
  

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 4, width: "50ch" },
      }}
      noValidate
      autoComplete="off"
      className={classes.book}
    >
      <Box className={classes.book__form}>
        <TextField id="outlined-basic" label="Title" variant="outlined" value={book.title} onChange={(e) => setBook({...book, title: e.target.value})}/>
        <TextField id="outlined-basic" label="Author" variant="outlined" value={book.author} onChange={(e) => setBook({ ...book, author: e.target.value })}/>
      </Box>
      {(book.title && book.author) ? <Button variant="contained" style={{ margin: '0', width: '100%' }} onClick={addNewBook}>Add</Button> : <Button variant="outlined" style={{ margin: '0', width: '100%', opacity: '0.6' }} onClick={addNewBook}>Add</Button>}
    </Box>
  );
};

export default AddBook;
