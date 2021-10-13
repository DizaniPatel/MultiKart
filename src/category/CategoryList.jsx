import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./CategoryList.css";
import Jwellery from "../assets/Jwellery.png";
import Electronics from "../assets/Electronics.png";
import Women from "../assets/Women.png";
import Men from "../assets/Men.png";
import { Link } from "react-router-dom";

class CategoryList extends Component {
  render() {
    return (
      <Container className="container">
        <section class="section-b-space border-section border-top-0">
          <div class="row">
            <div class="div">
              <div
                class="slick-slider slide-6 no-arrow slick-initialized overflowhidden"
                dir="ltr"
              >
                <Row>
                  <Col className="category-block">
                    <a href=" ">
                      <div class="category-image">
                        <img
                          src={Electronics}
                          alt=""
                          class="media"
                          width="60px"
                        ></img>
                      </div>
                    </a>
                    <div class="category-details">
                      <a href=" ">
                        {" "}
                        <h5>
                          <Link to="/electronics">electronics</Link>
                        </h5>
                      </a>
                    </div>
                  </Col>

                  <Col className="category-block">
                    <a href=" ">
                      <div class="category-image">
                        <img
                          alt=""
                          src={Jwellery}
                          class="media"
                          width="60px"
                        ></img>
                      </div>
                    </a>
                    <div class="category-details">
                      <a href=" ">
                        <h5>
                          <Link to="/Jewellery">jewellery </Link>
                        </h5>
                      </a>
                    </div>
                  </Col>

                  <Col className="category-block">
                    <a href=" ">
                      <div class="category-image">
                        <img src={Men} alt="" class="media" width="60px"></img>
                      </div>
                    </a>
                    <div class="category-details">
                      <a href=" ">
                        <h5>
                          <Link to="/mensclothing">men's clothing </Link>
                        </h5>
                      </a>
                    </div>
                  </Col>
                  <Col className="category-block">
                    <a href=" ">
                      <div class="category-image">
                        <img
                          src={Women}
                          alt=""
                          class="media"
                          width="60px"
                        ></img>
                      </div>
                    </a>
                    <div class="category-details">
                      <a href=" ">
                        <h5>
                          <Link to="/womensclothing">women's clothing </Link>
                        </h5>
                      </a>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </section>
      </Container>
    );
  }
}

export default CategoryList;
