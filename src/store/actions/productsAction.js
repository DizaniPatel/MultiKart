import {
  GET_JEWELLERYS,
  JEWELLERYS_ERROR,
  GET_PRODUCTS,
  PRODUCTS_ERROR,
  GET_ELECTRONICS,
  ELECTRONICS_ERROR,
  GET_MENCLOTHING,
  MENCLOTHING_ERROR,
  GET_WOMENCLOTHING,
  WOMENCLOTHING_ERROR,
} from "../types";
import * as API from "../../Api/Api";

export const getproducts = () => async (dispatch) => {
  try {
    const res = await API.getproducts();
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: PRODUCTS_ERROR,
      payload: console.log(e),
    });
  }
};
export const getJewellerys = () => async (dispatch) => {
  try {
    const res = await API.getJewellery();

    dispatch({
      type: GET_JEWELLERYS,
      val: res.data,
    });
  } catch (e) {
    dispatch({
      type: JEWELLERYS_ERROR,
      payload: console.log(e),
    });
  }
};
export const getElectronics = () => async (dispatch) => {
  try {
    const res = await API.getelectronics();
    dispatch({
      type: GET_ELECTRONICS,
      val: res.data,
    });
  } catch (e) {
    dispatch({
      type: ELECTRONICS_ERROR,
      payload: console.log(e),
    });
  }
};
export const getMenclothing = () => async (dispatch) => {
  try {
    const res = await API.getmenclothing();
    dispatch({
      type: GET_MENCLOTHING,
      val: res.data,
    });
  } catch (e) {
    dispatch({
      type: MENCLOTHING_ERROR,
      payload: console.log(e),
    });
  }
};
export const getWomensclothing = () => async (dispatch) => {
  try {
    const res = await API.getwomensclothing();
    dispatch({
      type: GET_WOMENCLOTHING,
      val: res.data,
    });
  } catch (e) {
    dispatch({
      type: WOMENCLOTHING_ERROR,
      payload: console.log(e),
    });
  }
};
