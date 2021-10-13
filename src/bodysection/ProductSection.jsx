import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { getproducts } from "../store/actions/productsAction";
import "./ProductSection.css";
class ProductSection extends Component {
  componentDidMount() {
    this.props.getproducts();
  }
  render() {
    const { products } = this.props.products;
    console.log(products);

    return (
      <section class="section-b-space p-t-0 ratio_asos">
        <Container fluid>
          <div class="game-product grid-products row">
            {products.map((product) => {
              return (
                <div
                  class="product-box col-md-4 col-6 col-sm-4 col-lg-3 "
                  key={product.id}
                >
                  <div class="img-wrapper">
                    <div class="front">
                      <a href=" ">
                        <div class="market-bg">
                          <img
                            src={product.image}
                            alt=" "
                            className="responsive"
                            width="600"
                            height="400"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="product-detail">
                    <div class="rating">
                      <i class="fa fa-star"></i> <i class="fa fa-star"></i>{" "}
                      <i class="fa fa-star"></i> <i class="fa fa-star"></i>{" "}
                      <i class="fa fa-star"></i>
                    </div>
                    <a href=" ">
                      <h6>{product.category}</h6>
                    </a>
                    <h4>{product.price}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    );
  }
}
const mapStateToProps = (state) => ({ products: state.products });

export default connect(mapStateToProps, { getproducts })(ProductSection);
