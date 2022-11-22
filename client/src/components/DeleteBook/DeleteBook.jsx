import React, { useState } from 'react';
import { useEffect } from 'react';
import { deleteBook, getBook } from '../../api/requests';

const DeleteBook = () => {
  const [id, setId] = useState('');
  
  useEffect(async () => {
    const data = await getBook();
    console.log(data)
  }, [])
  
  // const deleteTheBook = async(e) => {
  //   e.preventDefault();
  //   deleteBook()
  // }
  
  return (
    <div>
      
    </div>
  );
};

export default DeleteBook;