import React from 'react';
import Proptypes from 'prop-types';
import '../App.css';
import { useDispatch } from 'react-redux';
import { getBook, deleteBook } from '../redux/books/books';

const Book = (props) => {
  const { id, title, author } = props;
  const dispatch = useDispatch();

  const handleBook = (id) => {
    dispatch(deleteBook(id));
    dispatch(getBook());
  };

  return (
    <div className="Books-Detail">
      <div className="Book-Detail">
        <div className="Book-Title">
          <p className="Category">Fiction</p>
          <h2 className="Title">{title}</h2>
          <p className="Author">{author}</p>
          <div className="Buttons">
            <button type="button" className="Comments">Comments</button>
            <div className="Line2" />
            <button onClick={() => (handleBook(id))} type="submit" className="Remove">Remove</button>
            <div className="Line2" />
            <button type="button">Edit</button>
          </div>
        </div>
        <div className="Circular">
          <div className="Spin" />
          <div className="percentage">
            <h2>
              {Math.floor(Math.random() * 100)}
              %
            </h2>
            <p>Completed</p>
          </div>
          <div className="Line3" />
        </div>
        <div className="Chapters">
          <p className="Current">CURRENT CHAPTER</p>
          <p className="ChapterNo">Chapter 17</p>
          <div className="Rectangle">
            <button type="button">UPDATE PROGRESS</button>
          </div>
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
