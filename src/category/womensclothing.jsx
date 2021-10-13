import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import "../bodysection/ProductSection.css";
import Header1 from "../header/Header1";
import { getWomensclothing } from "../store/actions/productsAction";

class Womensclothing extends Component {
  componentDidMount() {
    this.props.getWomensclothing();
  }
  render() {
    const { womensclothings } = this.props.womensclothings;
    console.log(womensclothings);

    return (
      <Container fluid>
        <div>
          <Header1 />
        </div>
        <div className="game-product grid-products row">
          {womensclothings.map((womensclothing) => {
            return (
              <div
                className="product-box col-md-4 col-6 col-sm-4 col-lg-4 "
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
                          width="400"
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
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({ womensclothings: state.products });

export default connect(mapStateToProps, { getWomensclothing })(Womensclothing);
