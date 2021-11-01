import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_FAILURE,
  FETCH_AllPRODUCTS_REQUEST,
  FETCH_AllPRODUCTS_FAILURE,
} from "../../types";

const initialState = {
  loading: true,
  products: [],
  productbycategory: [],
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

    case FETCH_AllPRODUCTS_REQUEST:
      return {
        ...state,
        productbycategory: action.val,
        loading: false,
      };
    case FETCH_AllPRODUCTS_FAILURE:
      return {
        loading: false,
        productbycategory: [],
        error: action.val,
      };

    default:
      return state;
  }
};

export default reducer;
