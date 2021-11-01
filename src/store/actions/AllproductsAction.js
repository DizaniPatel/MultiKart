import axios from "axios";
import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_FAILURE,
    FETCH_AllPRODUCTS_REQUEST,
    FETCH_AllPRODUCTS_FAILURE,
} from "../types";

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

export const fetchProductsbyCategory = (category) => {
    return (dispatch) => {
        axios
            .get("https://fakestoreapi.com/products/category/" + category)
            .then((response) => {
                const productbycategory = response.data;
                dispatch(fetchAllProductsRequest(productbycategory));
            })
            .catch((error) => {
                dispatch(fetchAllProductsFailure(error.message));
            });
    };
};

export const fetchAllProductsRequest = (productbycategory) => {
    return {
        type: FETCH_AllPRODUCTS_REQUEST,
        val: productbycategory,
    };
};

export const fetchAllProductsFailure = (error) => {
    return {
        type: FETCH_AllPRODUCTS_FAILURE,
        val: error,
    };
};