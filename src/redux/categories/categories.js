const CHECKSTATUS = 'bookstore/categories/CHECKSTATUS';

const initialState = [];

export const CheckStatus = (category) => ({
  type: CHECKSTATUS,
  category,
});

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKSTATUS: return [
      {
        text: 'Initial Reducers Construction',
      },
    ];

    default: return state;
  }
};

export default categoryReducer;
