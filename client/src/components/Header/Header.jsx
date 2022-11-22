import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={classes.header}>
      
      <NavLink to="/">Main</NavLink>
      <NavLink to="/books">All Books</NavLink>
      <NavLink to="/add-book">Add a new Book</NavLink>
    </header>
  );
};

export default Header;
