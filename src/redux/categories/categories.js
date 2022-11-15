const CHECKSTATUS = 'bookstore-app/categories/CHECKSTATUS';

const initialState = '';

export const CheckStatus = () => ({
  type: CHECKSTATUS,
  category: 'Under Construction',
});

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKSTATUS:
      return action.category;

    default: return state;
  }
};

export default categoryReducer;
