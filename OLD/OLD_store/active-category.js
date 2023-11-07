// Actions
const SET_ACTIVE_CATEGORY = 'SET_ACTIVE_CATEGORY';

export const setActiveCategory = (category) => ({
  type: SET_ACTIVE_CATEGORY,
  payload: category,
});

// Reducer
const activeCategoryReducer = (state = null, action) => {
  const { type, payload } =  action;
  switch (type) {
    case SET_ACTIVE_CATEGORY:
      return payload;
    default:
      return state;
  }
};

export default activeCategoryReducer;