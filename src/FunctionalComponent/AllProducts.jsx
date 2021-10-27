import React, { useEffect } from "react";
import { connect } from "react-redux";

import fetchProducts from "../store/actions/reducer/productReducer";
function AllProducts({ allproducts, fetchProducts }) {
  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    console.log(allproducts);
  }, [allproducts]);
  return (
    <div>
      {/* {productData.map((product) => (
        <p>{product.image}</p>
      ))} */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    image: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
