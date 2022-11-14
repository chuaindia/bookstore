const ADDBOOK = 'bookstore/books/ADDBOOK';
const DELETEBOOK = 'bookstore/books/DELETEBOOK';
const GETBOOK = 'bookstore/books/GETBOOK';

const initialState = [];

const getBooksAPI = async () => {
  const API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GYZ4VCm0OI0zBZ9BBlYy/books';
  const resp = await fetch(API, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const booksArray = await resp.json();
  const books = Object.keys(booksArray).map((id) => ({
    id,
    title: booksArray[id][0].title,
    author: booksArray[id][0].author,
  }));
  return books;
};

export const getBook = () => (async (dispatch) => {
  const books = await getBooksAPI();
  dispatch({ type: GETBOOK, payload: books });
});

const addBooksAPI = async ({
  id, title, author, category,
}) => {
  const API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GYZ4VCm0OI0zBZ9BBlYy/books';
  const data = await fetch(API, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      title,
      author,
      category,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  await data.text();
};

export const AddBook = (book) => (async (dispatch) => {
  await addBooksAPI(book);

  dispatch({
    type: ADDBOOK,
    payload: book,
  });
});

const delBookAPI = async (id) => {
  const API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GYZ4VCm0OI0zBZ9BBlYy/books';
  const data = await fetch(`${API}/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  await data.text();
};

export const delBook = (id) => (async (dispatch) => {
  await delBookAPI(id);
  dispatch({
    type: DELETEBOOK,
    payload: id,
  });
});

const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDBOOK: return [
      ...state,
      action.payload,
    ];
    case DELETEBOOK:
      return state.filter((book) => book.id !== action.payload);
    case GETBOOK:
      return action.payload;

    default: return state;
  }
};

export default BookReducer;
