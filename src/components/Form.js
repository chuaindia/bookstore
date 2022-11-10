import React from 'react';
import '../App.css';

const Form = () => (
  <form className="BookForm">
    <input type="text" placeholder="Book Title" />
    <input type="text" placeholder="Author" />
    <button type="submit">Add Book</button>
  </form>
);

export default Form;
