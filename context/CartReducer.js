const CartReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCT_LIST":
      return {
        ...state,
        productList: action.payload,
      };
    // Add more cases for other actions if needed
    default:
      return state;
  }
};

export default CartReducer;
