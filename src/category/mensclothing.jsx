import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import "../bodysection/ProductSection.css";
import { getMenclothing } from "../store/actions/productsAction";
import Header1 from "../header/Header1";
import Footer1 from "../Footer/Footer1";
import Footer2 from "../Footer/Footer2";

class Mensclothing extends Component {
  componentDidMount() {
    this.props.getMenclothing();
  }
  render() {
    const { mensclothings } = this.props.mensclothings;
    console.log(mensclothings);

    return (
      <Container fluid>
        <div>
          <Header1 />
        </div>
        <div className="game-product grid-products row">
          {mensclothings.map((mensclothing) => {
            return (
              <div
                className="product-box col-12 col-sm-6 col-lg-3 "
                style={({ float: "none" }, { margin: "0 auto " })}
                key={mensclothing.id}
              >
                <div className="img-wrapper">
                  <div className="front">
                    <a href=" ">
                      <div className="market-bg center">
                        <img
                          src={mensclothing.image}
                          alt=" "
                          className="responsive"
                          width="600"
                          height="600"
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
        <div className="paddingTop">
          <Footer1 />
          <Footer2 />
        </div>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({ mensclothings: state.products });

export default connect(mapStateToProps, { getMenclothing })(Mensclothing);
