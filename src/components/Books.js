import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewBook } from '../redux/books/books';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addNewBook());
  }, [dispatch]);

  return (
    <div>
      {books.map((book) => (
        <Book
          id={book.id}
          key={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
      <Form />
    </div>
  );
};

export default Books;
