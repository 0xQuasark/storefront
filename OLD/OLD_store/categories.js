'use strict';

const SET_CATEGORIES = 'SET_CATEGORIES';
const SET_ACTIVE_CATEGORY = 'SET_ACTIVE_CATEGORY'; 

// Action creator
export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});

export const setActiveCategory = (category) => ({
  type: SET_ACTIVE_CATEGORY,
  payload: category,
});

// Reducer
const categoriesReducer = (state = [], action) => {
  const { type, payload } =  action;
  switch (type) {
    case SET_CATEGORIES:
      console.log('Heres our CATEGORY payload:', payload);
      return payload;
    default:
      return state;
  }
};
export default categoriesReducer;