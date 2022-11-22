import axios from 'axios';
const URL = 'http://localhost:4000';

export const getAllBooks = async() => {
  try {
    const result = await axios.get(`${URL}/books`);
    return result;
  }
  catch(error) {
    console.log('Error while getting all books', error.message);
  }
}

export const getBook = async(id) => {
  try {
    return axios.get(`${URL}/books/${id}`);
  }
  catch(error) {
    console.log('Error while getting a book', error.message);
  } 
}

export const addBook = async(book) => {
  try {
    return await axios.post(`${URL}/books`, book);
  }
  catch(error) {
    console.log('Error while adding a book', error.message);
  }
}

export const deleteBook = async(id) => {
  try {
    return await axios.delete(`${URL}/books/${id}`);
  }
  catch(error) {
    console.log('Error while deleting the book', error.message);
  }
}

export const editBook = async(id, book) => {
  try {
    return await axios.put(`${URL}/books/${id}`, book);
  }
  catch(error) {
    console.log('Error while editing the book', error.message);
  }
}
