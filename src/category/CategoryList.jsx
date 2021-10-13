import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./CategoryList.css";
import Jwellery from "../assets/Jwellery.png";
import Electronics from "../assets/Electronics.png";
import Women from "../assets/Women.png";
import Men from "../assets/Men.png";
import { Link } from "react-router-dom";

class CategoryList extends Component {
  render() {
    return (
      <Container fluid>
        <div class="row">
          <div class="col-6 col-md-3">
            <div className="style">
              <div className="img">
                <a href=" ">
                  <img src={Electronics} alt="..." />
                </a>
              </div>
              <div className="card-body">
                <a href=" ">
                  {" "}
                  <h5>
                    <Link to="/electronics">ELECTRONICS</Link>
                  </h5>
                </a>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div className="style">
              <div className="img">
                <a href=" ">
                  <img src={Jwellery} alt="..." />
                </a>{" "}
              </div>{" "}
              <div className="card-body">
                <a href=" ">
                  {" "}
                  <h5>
                    <Link to="/Jewellery">JEWELLERY </Link>{" "}
                  </h5>
                </a>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div className="style">
              <div className="img">
                <a href=" ">
                  <img src={Men} alt="..." />
                </a>{" "}
              </div>{" "}
              <div className="card-body">
                <a href=" ">
                  {" "}
                  <h5>
                    <Link to="/mensclothing">MEN'S CLOTHING </Link>
                  </h5>
                </a>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div className="style">
              <div className="img">
                <a href=" ">
                  <img src={Women} alt="..." />
                </a>{" "}
              </div>{" "}
              <div className="card-body">
                <a href=" ">
                  {" "}
                  <h5>
                    <Link to="/womensclothing">WOMEN'S CLOTHING </Link>
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default CategoryList;
