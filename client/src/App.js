import './App.css';
import AllBooks from './components/AllBooks/AllBooks';
import Header from './components/Header/Header';
import { Routes, Route, useParams } from "react-router-dom";
import MainPage from './components/MainPage/MainPage';
import LoadingEffect from './UI/Loader/LoadingEffect';
import { useState } from 'react';
import AddBook from './components/AddBook/AddBook';
import DeleteBook from './components/DeleteBook/DeleteBook';
import Book from './components/Book/Book';

function App() {
  const {id} = useParams();
  const [currentBook, setCurrentBook] = useState({});
  // Сюда засетаю edit book в current
  
  const getTheBook = (book) => {
    setCurrentBook(book);
  }
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/add-book' element={<AddBook />}/>
        <Route path='/books' element={<AllBooks getTheBook={getTheBook}/>}/>
        <Route path='/books/:id' element={<Book settingsMode={true} id={currentBook.id} title={currentBook.title} author={currentBook.author} getTheBook={getTheBook}/>}/>
      </Routes>
    </div>
  );
}

export default App;
