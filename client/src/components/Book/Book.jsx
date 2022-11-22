import React, { useEffect, useState } from "react";
import classes from "./Book.module.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { deleteBook, editBook, getBook } from "../../api/requests";
import TextField from "@mui/material/TextField";

const Book = ({ id, title, author, settingsMode, getTheBook }) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [bookLocal, setBookLocal] = useState({id: '', title: '', author: ''});


  const getABook = async () => {
    const { data } = await getBook(id);
    getTheBook(data);
    setBookLocal({...bookLocal, title: data.title, author: data.author})
  };

  const deleteTheBook = () => {
    deleteBook(id);
    setIsDeleted(true);
  };

  const saveEditedBook = async() => {
    if (bookLocal.title && bookLocal.author) {
      const result = await editBook(id, {title: bookLocal.title, author: bookLocal.author}); 
      setBookLocal({...bookLocal, title: '', author: ''});
      return result;
    }
  }
  
  return (
    <>
      {!isDeleted ? (
        <div className={classes.book}>
          <div>
            <div className={classes.id}>
              id: <span style={{ color: "black" }}>{id}</span>
            </div>
            {!editMode ? (
              <div className={classes.title}>
                Title: <span style={{ color: "black" }}>{title}</span>
              </div>
            ) : (
              <TextField
                style={{ marginTop: "20px", width: 'fit-content' }}
                id="outlined-basic"
                label="Title"
                variant="outlined"
                value={bookLocal.title}
                onChange={(e) => setBookLocal({...bookLocal, title: e.target.value})}
              />
            )}
            {!editMode ? (
              <div className={classes.author}>
                Author: <span style={{ color: "black" }}>{author}</span>
              </div>
            ) : (
              <TextField
                style={{ display: "block", margin: "20px 0" }}
                id="outlined-basic"
                label="Author"
                variant="outlined"
                value={bookLocal.author}
                onChange={(e) => setBookLocal({...bookLocal, author: e.target.value})}
              />
            )}
          </div>
          {!settingsMode ? (
            <NavLink to={`${id}`} className={classes.link} onClick={getABook}>
              . . .
            </NavLink>
          ) : (
            <Stack spacing={2} direction="row">
              {!editMode ? (
                <Button variant="contained" onClick={(e) => {
                  e.preventDefault();
                  setBookLocal({...bookLocal, title, author});
                  setEditMode(true);
                  }}>
                  Edit
                </Button>
              ) : (
                <Button variant="contained" onClick={ 
                  saveEditedBook}>
                  Save
                </Button>
              )}
              <Button variant="outlined" onClick={deleteTheBook}>
                Delete
              </Button>
            </Stack>
          )}
        </div>
      ) : (
        <h2
          style={{
            width: "fit-content",
            margin: "50px auto",
            color: "#1972d2",
          }}
        >
          The book has been deleted
        </h2>
      )}
    </>
  );
};

export default Book;
