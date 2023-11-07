// Actions
const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_ACTIVE_CATEGORY = 'SET_ACTIVE_CATEGORY'; 

// Action creator
export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});

// Reducer
const productsReducer = (state = [], action) => {
  const { type, payload } =  action;
  switch (type) {
    case SET_PRODUCTS:
      console.log('Heres our PRODUCT payload:', payload);
      return payload;
    case SET_ACTIVE_CATEGORY:
      return payload;
    default:
      return state;
  }
};

export default productsReducer;