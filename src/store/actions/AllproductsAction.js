import axios from "axios";
import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_FAILURE } from "../types";

export const fetchProducts = (id) => {
    return (dispatch) => {
        axios
            .get("https://fakestoreapi.com/products/" + id)
            .then((response) => {
                const products = response.data;
                dispatch(fetchProductsRequest(products));
            })
            .catch((error) => {
                dispatch(fetchProductsFailure(error.message));
            });
    };
};

export const fetchProductsRequest = (products) => {
    return {
        type: FETCH_PRODUCTS_REQUEST,
        payload: products,
    };
};

export const fetchProductsFailure = (error) => {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: error,
    };
};