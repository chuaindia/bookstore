import React from 'react';
import Proptypes from 'prop-types';
import '../App.css';
import { useDispatch } from 'react-redux';
import { getBook, deleteBook } from '../redux/books/books';

const Book = (props) => {
  const { id, title, author } = props;
  const dispatch = useDispatch();

  const handledBook = (id) => {
    dispatch(deleteBook(id));
    dispatch(getBook());
  };

  return (
    <div className="Books-Detail">
      <div className="Book-Detail">
        <div className="Book-Title">
          <h2>{title}</h2>
          <p>{author}</p>
          <button type="button">Comments</button>
          <button onClick={() => (handledBook(id))} type="submit">Remove</button>
          <button type="button">Edit</button>
        </div>
        <div className="Book-Reading-Detail">
          <h2>64%</h2>
          <p>Completed</p>
        </div>
        <div>
          <p>CURRENT CHAPTER</p>
          <p>Chapter 17</p>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: Proptypes.number.isRequired,
  title: Proptypes.string.isRequired,
  author: Proptypes.string.isRequired,
};

export default Book;
