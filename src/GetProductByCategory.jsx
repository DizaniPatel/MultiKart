import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Grid } from "@mui/material";
import { Paper } from "@mui/material";
import { fetchProductsbyCategory } from "./store/actions/AllproductsAction";

function GetProductByCategory({
  category,
  fetchProductsbyCategory,
  productData,
}) {
  useEffect(() => {
    fetchProductsbyCategory(category);
    console.log(category);
  }, [category]);

  // let { category } = useParams();
  console.log(productData.productbycategory);
  return (
    <Grid container spacing={2}>
      {productData.productbycategory &&
        productData.productbycategory.map((product) => (
          <Grid
            xs={12}
            sm={6}
            md={3}
            lg={3}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              p: 4,
              pl: 5,
              pr: 5,
            }}
          >
            <Paper elevation={6} sx={{ width: "800px", p: 3 }}>
              <div key={category}>
                <Paper variant="outlined">
                  <img
                    src={product.image}
                    alt=" "
                    className="responsive"
                    width="100%"
                    height="400"
                  />
                </Paper>
                <p>
                  <span
                    style={{
                      fontSize: "16px",
                      color: "black",
                      fontWeight: "bolder",
                    }}
                  >
                    Price:
                  </span>
                  {product.price}
                </p>

                <p>
                  <span
                    style={{
                      fontSize: "16px",
                      color: "black",
                      fontWeight: "bolder",
                    }}
                  >
                    Title:
                  </span>
                  {product.title}
                </p>
                <p>
                  <span
                    style={{
                      fontSize: "16px",
                      color: "black",
                      fontWeight: "bolder",
                    }}
                  >
                    Category:
                  </span>
                  {product.category}
                </p>
                <p>
                  <span
                    style={{
                      fontSize: "16px",
                      color: "black",
                      fontWeight: "bolder",
                    }}
                  >
                    Description:
                  </span>
                  {product.description}
                </p>
              </div>
            </Paper>
          </Grid>
        ))}
    </Grid>
  );
}
const mapStateToProps = (state) => {
  return {
    productData: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProductsbyCategory: (category) =>
      dispatch(fetchProductsbyCategory(category)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetProductByCategory);
