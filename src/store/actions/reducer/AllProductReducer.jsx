import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_FAILURE } from "../../types";

const initialState = {
  loading: true,
  products: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        loading: false,
        products: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
