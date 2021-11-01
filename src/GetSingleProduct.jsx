import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "./store/actions/AllproductsAction";
import { Grid, Container } from "@mui/material";
import Header1 from "./header/Header1";
import Footer1 from "./Footer/Footer1";
import Footer2 from "./Footer/Footer2";
import Categoryheader2 from "./category/categoryheader2";
import { useParams } from "react-router-dom";
import { Backdrop } from "@mui/material";
import { CircularProgress } from "@mui/material";
import GetProductByCategory from "./GetProductByCategory";

function GetSingleProduct({ productData, fetchProducts }) {
  useEffect(() => {
    fetchProducts(id);
  }, []);
  const [open, setOpen] = useState(true);

  let { id } = useParams();

  return (
    <>
      <div>
        <Backdrop open={open} onClick={() => setOpen(false)}>
          <CircularProgress />
        </Backdrop>
      </div>
      <div>
        <Header1 />
        <Categoryheader2 name="PRODUCT" />
        <Container>
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              p: 4,
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                p: 2,

                fontWeight: "bolder",
                fontSize: "25px",
                color: "navyblue",
              }}
            >
              {" "}
              Product Detail{" "}
            </Grid>
            {
              <Grid
                xs={12}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 5,
                }}
              >
                <div key={id}>
                  <Grid container spacing={2}>
                    <Grid
                      xs={12}
                      md={6}
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Grid
                        xs={12}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={productData.products.image}
                          alt=" "
                          className="responsive"
                          width="300"
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      xs={12}
                      md={6}
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Grid container sx={{ pt: 2.5 }}>
                        <Grid
                          xs={12}
                          sx={{
                            alignItems: "center",
                          }}
                        >
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
                            {productData.products.price}
                          </p>
                        </Grid>
                        <Grid container sx={{ pt: 2.5 }}>
                          <Grid
                            xs={12}
                            sx={{
                              alignItems: "center",
                            }}
                          >
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
                              {productData.products.title}
                            </p>
                          </Grid>
                          <Grid
                            xs={12}
                            sx={{
                              alignItems: "center",
                            }}
                          >
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
                              {productData.products.category}
                            </p>
                          </Grid>
                          <Grid
                            xs={12}
                            sx={{
                              alignItems: "center",
                            }}
                          >
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
                              {productData.products.description}
                            </p>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            }
          </Grid>
        </Container>
        <GetProductByCategory category={productData.products.category} />
        <Footer1 />
        <Footer2 />
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    productData: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: (id) => dispatch(fetchProducts(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GetSingleProduct);
