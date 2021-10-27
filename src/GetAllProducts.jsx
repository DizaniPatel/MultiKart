import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "./store/actions/AllproductsAction";

function GetAllProducts({ productData, fetchProducts }) {
  useEffect(() => {
    fetchProducts();
  }, []);
  return productData.loading ? (
    <h2>Data Loading</h2>
  ) : productData.error ? (
    <h2>{productData.error}</h2>
  ) : (
    <div>
      {productData.products &&
        productData.products.map((product) => (
          <div key={product.id}>
            <p style={{ fontSize: "40px" }}>{product.id}</p>
            <img
              src={product.image}
              alt=" "
              className="responsive"
              width="500"
              height="400"
            />
            <p>{product.price}</p>
            <p>{product.title}</p>
            <p>{product.category}</p>
            <p>{product.description}</p>
          </div>
        ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    productData: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GetAllProducts);
