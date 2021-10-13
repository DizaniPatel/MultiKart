import {
    GET_JEWELLERYS,
    GET_PRODUCTS,
    GET_ELECTRONICS,
    GET_MENCLOTHING,
    GET_WOMENCLOTHING,
} from "../../types";

const initialState = {
    products: [],
    jewellerys: [],
    electronics: [],
    mensclothings: [],
    womensclothings: [],

    loading: true,
};

export default function foo(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                loading: false,
            };
        case GET_JEWELLERYS:
            return {
                ...state,
                jewellerys: action.val,
                loading: false,
            };
        case GET_ELECTRONICS:
            return {
                ...state,
                electronics: action.val,
                loading: false,
            };
        case GET_MENCLOTHING:
            return {
                ...state,
                mensclothings: action.val,
                loading: false,
            };
        case GET_WOMENCLOTHING:
            return {
                ...state,
                womensclothings: action.val,
                loading: false,
            };

        default:
            return state;
    }
}