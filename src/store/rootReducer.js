import { combineReducers } from "redux";
import AllproductsReducer from "./actions/reducer/AllProductReducer";
import productReducer from "./actions/reducer/productReducer";

const rootReducer = combineReducers({
    products: AllproductsReducer,
    product: productReducer,
});

export default rootReducer;