import { configureStore } from '@reduxjs/toolkit';
import BookReducer from './books/books';
import categoryReducer from './categories/categories';

const rootReducer = configureStore({
  reducers: {
    BookReducer,
    categoryReducer,
  },
});
export default rootReducer;
