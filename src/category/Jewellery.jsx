import React, { Component } from "react";
import { connect } from "react-redux";
import { getJewellerys } from "../store/actions/productsAction";
import "../bodysection/ProductSection.css";
import { Container } from "react-bootstrap";
import Header1 from "../header/Header1";
import Footer1 from "../Footer/Footer1";

class Jewellery extends Component {
  componentDidMount() {
    this.props.getJewellerys();
  }
  render() {
    const { jewellerys } = this.props.jewellerys;
    console.log(jewellerys);

    return (
      <Container fluid>
        <div>
          <Header1 />
        </div>

        <div className="game-product grid-products row">
          {jewellerys.map((jewellery) => {
            return (
              <div
                className="product-box col-12 col-sm-6 col-lg-3"
                style={({ float: "none" }, { margin: "0 auto " })}
                key={jewellery.id}
              >
                <div className="img-wrapper">
                  <div className="front">
                    <a href=" ">
                      <div className="market-bg center">
                        <img
                          src={jewellery.image}
                          alt=" "
                          className="responsive"
                          width="500"
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
        <div className="paddingTop">
          <Footer1 />
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({ jewellerys: state.products });

export default connect(mapStateToProps, { getJewellerys })(Jewellery);
