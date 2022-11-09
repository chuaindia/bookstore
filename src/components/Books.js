import React from 'react';
import Book from './Book';
import Form from './Form';

const list = [
  {
    id: 1,
    title: 'Title',
    author: 'Author',
  },
  {
    id: 2,
    title: 'Title',
    author: 'Author',
  },
  {
    id: 3,
    title: 'Title',
    author: 'Author',
  },
];

const Books = () => (
  <div>
    {list.map((list) => <Book key={list.id} title={list.title} author={list.author} />)}
    <Form />
  </div>
);

export default Books;