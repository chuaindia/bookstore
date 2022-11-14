const ADDBOOK = 'bookstore/books/ADDBOOK';
const DELETEBOOK = 'bookstore/books/DELETEBOOK';

const initialState = [];

export const AddBook = (book) => ({
  type: ADDBOOK,
  book,
});

export const delBook = (book) => ({
  type: DELETEBOOK,
  book,
});

const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDBOOK: return [
      ...state,
      action.payload,
    ];
    case DELETEBOOK: return [
      ...state.filter((each) => each.id !== action.payload.id),
    ];
    default: return state;
  }
};

export default BookReducer;
