import React, { Component } from "react";
import "../bodysection/ProductSection.css";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { getElectronics } from "../store/actions/productsAction";
import Header1 from "../header/Header1";
import Footer1 from "../Footer/Footer1";
import Footer2 from "../Footer/Footer2";

class Electronics extends Component {
  componentDidMount() {
    this.props.getElectronics();
  }
  render() {
    const { electronics } = this.props.electronics;
    console.log(electronics);

    return (
      <Container fluid>
        <div>
          <Header1 />
        </div>

        <div className="game-product grid-products row">
          {electronics.map((electronic) => {
            return (
              <div
                className="product-box col-12 col-sm-6 col-md-4  "
                style={({ float: "none" }, { margin: "0 auto " })}
                key={electronic.id}
              >
                <div className="img-wrapper">
                  <div className="front">
                    <a href=" ">
                      <div className="market-bg">
                        <img
                          src={electronic.image}
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
                    <h6>{electronic.category}</h6>
                  </a>
                  <h6 className="overflow">{electronic.title}</h6>

                  <h4>{electronic.price}</h4>
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

const mapStateToProps = (state) => ({ electronics: state.product });

export default connect(mapStateToProps, { getElectronics })(Electronics);
