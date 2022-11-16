import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { AddBook, getBook } from '../redux/books/books';
import '../App.css';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  // handle Add book
  const handleAddBook = (e) => {
    e.preventDefault();
    const book = {
      id: uuidv4(),
      title,
      author,
      category: '',
    };
    dispatch(AddBook(book));
    dispatch(getBook());
    setTitle('');
    setAuthor('');
  };

  const handleChangeTitle = (e) => (setTitle(e.target.value));

  const handleChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <div className="AddBook">
      <h2 className="AddBookTitle">Add New Book</h2>
      <form className="BookForm" onSubmit={handleAddBook}>
        <input onChange={handleChangeTitle} type="text" placeholder="Book Title" value={title} className="BookTitle" />
        <input onChange={handleChangeAuthor} type="text" placeholder="Author" value={author} className="BookAuthor" />
        <select name="category" className="CategoryList">
          <option value="" defaultValue>Category</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Drama">Drama</option>
          <option value="Romance">Romance</option>
          <option value="History">History</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Thriller">Thriller</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default Form;
