import axios from "axios";

const SERVERURL = "https://fakestoreapi.com";
export const getproducts = async() => {
    const res = await axios.get(SERVERURL + "/products?limit=12");
    return res;
};
export const getJewellery = async() => {
    const res = await axios.get(SERVERURL + "/products/category/jewelery");
    return res;
};
export const getelectronics = async() => {
    const res = await axios.get(SERVERURL + "/products/category/electronics");
    return res;
};
export const getmenclothing = async() => {
    const res = await axios.get(SERVERURL + "/products/category/men's clothing");
    return res;
};
export const getwomensclothing = async() => {
    const res = await axios.get(
        SERVERURL + "/products/category/women's clothing"
    );
    return res;
};