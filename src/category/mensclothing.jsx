import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import "../bodysection/ProductSection.css";
import { getMenclothing } from "../store/actions/productsAction";

class Mensclothing extends Component {
  componentDidMount() {
    this.props.getMenclothing();
  }
  render() {
    const { mensclothings } = this.props.mensclothings;
    console.log(mensclothings);

    return (
      <Container>
        <section className="section-b-space p-t-0 ratio_asos">
          <div className="container ">
            <div className="game-product grid-products row">
              {mensclothings.map((mensclothing) => {
                return (
                  <div
                    className="product-box col-sm-4 col-md-3 col-lg-2 col-xl-2 "
                    style={({ float: "none" }, { margin: "0 auto " })}
                    key={mensclothing.id}
                  >
                    <div className="img-wrapper">
                      <div className="front">
                        <a href=" ">
                          <div className="market-bg">
                            <img
                              src={mensclothing.image}
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
                        <h6>{mensclothing.category}</h6>
                      </a>
                      <h6 className="overflow">{mensclothing.title}</h6>

                      <h4>{mensclothing.price}</h4>
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
const mapStateToProps = (state) => ({ mensclothings: state.products });

export default connect(mapStateToProps, { getMenclothing })(Mensclothing);
