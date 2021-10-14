import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer1.css";

export class Footer1 extends Component {
  render() {
    return (
      <div class="body footer">
        <Container fluid>
          <section class="padding-section border-section ">
            <Row class="row">
              <Col class="col" sm={12} md={6}>
                <div class="col1">
                  <div>
                    <h4>KNOW IT ALL FIRST!</h4>
                    <p class="hidden">
                      Never Miss Anything From Multikart By Signing Up To Our
                      Newsletter.
                    </p>
                  </div>
                </div>
              </Col>
              <Col class="col" sm={12} md={6}>
                <form class="form-inline subscribe-form">
                  <Col class="col" sm={12} md={6}>
                    <div class="sm-3 form-group">
                      <input
                        placeholder="Enter your email"
                        type="text"
                        class="form-control "
                      ></input>
                    </div>
                  </Col>
                  <Col class="col" sm={12} md={6}>
                    <button
                      type="submit"
                      class="btn btn-solid btn btn-secondary"
                    >
                      subscribe
                    </button>
                  </Col>
                </form>
              </Col>
            </Row>
          </section>
        </Container>
      </div>
    );
  }
}

export default Footer1;
