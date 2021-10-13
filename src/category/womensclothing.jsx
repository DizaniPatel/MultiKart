import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import "../bodysection/ProductSection.css";
import { getWomensclothing } from "../store/actions/productsAction";

class Womensclothing extends Component {
  componentDidMount() {
    this.props.getWomensclothing();
  }
  render() {
    const { womensclothings } = this.props.womensclothings;
    console.log(womensclothings);

    return (
      <Container>
        <section className="section-b-space p-t-0 ratio_asos">
          <div className="container ">
            <div className="game-product grid-products row">
              {womensclothings.map((womensclothing) => {
                return (
                  <div
                    className="product-box col-sm-4 col-md-3 col-lg-2 col-xl-2 "
                    style={({ float: "none" }, { margin: "0 auto " })}
                    key={womensclothing.id}
                  >
                    <div className="img-wrapper">
                      <div className="front">
                        <a href=" ">
                          <div className="market-bg">
                            <img
                              src={womensclothing.image}
                              alt=" "
                              className="responsive"
                              width="600"
                              height="400"
                            />
                          </div>
                        </a>
                      </div>
                      <div
                        className="add-button"
                        data-toggle="modal"
                        data-target="#addtocart"
                      >
                        add to cart
                      </div>
                    </div>
                    <div className="product-detail">
                      <div className="rating">
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </div>

                      <div className="rating">
                        {womensclothing.rating.rate}
                        {womensclothing.rating.count}
                      </div>
                      <a href=" ">
                        <h6>{womensclothing.category}</h6>
                      </a>
                      <h6 className="overflow">{womensclothing.title}</h6>
                      <h4>{womensclothing.price}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
            '
          </div>
        </section>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({ womensclothings: state.products });

export default connect(mapStateToProps, { getWomensclothing })(Womensclothing);
