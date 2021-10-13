import React, { Component } from "react";
import { connect } from "react-redux";
import { getJewellerys } from "../store/actions/productsAction";
import "../bodysection/ProductSection.css";
import { Container } from "react-bootstrap";

class Jewellery extends Component {
  componentDidMount() {
    this.props.getJewellerys();
  }
  render() {
    const { jewellerys } = this.props.jewellerys;
    console.log(jewellerys);

    return (
      <Container>
        <section className="section-b-space p-t-0 ratio_asos">
          <div className="container ">
            <div className="game-product grid-products row">
              {jewellerys.map((jewellery) => {
                return (
                  <div
                    className="product-box col-sm-4 col-md-3 col-lg-2 col-xl-2 "
                    style={({ float: "none" }, { margin: "0 auto " })}
                    key={jewellery.id}
                  >
                    <div className="img-wrapper">
                      <div className="front">
                        <a href=" ">
                          <div className="market-bg">
                            <img
                              src={jewellery.image}
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
                      <a href=" ">
                        <h6>{jewellery.category}</h6>
                      </a>
                      <h6 className="overflow">{jewellery.title}</h6>
                      <h4>{jewellery.price}</h4>
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

const mapStateToProps = (state) => ({ jewellerys: state.products });

export default connect(mapStateToProps, { getJewellerys })(Jewellery);
