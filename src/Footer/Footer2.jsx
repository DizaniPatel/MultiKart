import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer2.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import WifiIcon from "@mui/icons-material/Wifi";

export class Footer2 extends Component {
  render() {
    return (
      <div class="body padding">
        <Container fluid>
          <div className=" footer2">
            <Row>
              <Col md={5} sm={6}>
                <div>
                  <img
                    alt=""
                    src="https://multikart-react.vercel.app/assets/images/icon/logo.png"
                    className="d-inline-block "
                  />
                </div>

                <p className="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <div>
                  <FacebookRoundedIcon sx={{ mr: 2 }} />
                  <GoogleIcon sx={{ mr: 2 }} />
                  <TwitterIcon sx={{ mr: 2 }} />
                  <InstagramIcon sx={{ mr: 2 }} />
                  <WifiIcon />
                </div>
              </Col>

              <Col md={2} sm={6}>
                <h4 className="h4">MY ACCOUNT</h4>
                <h6 className="h6">Womens</h6>
                <h6 className="h6">Clothing</h6>
                <h6 className="h6">Accessories</h6>
                <h6 className="h6">Featured</h6>
              </Col>

              <Col md={2} sm={6}>
                <h4 className="h4">WHY WE CHOOSE</h4>
                <h6 className="h6">Shipping & Return</h6>
                <h6 className="h6">Secure Shopping</h6>
                <h6 className="h6">Gallary</h6>
                <h6 className="h6">Affiliates</h6>
                <h6 className="h6">Contacts</h6>
              </Col>

              <Col md={3} sm={6}>
                <h4 className="h4">STORE INFORMATION</h4>
                <h6 className="h6">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                  Multikart Demo Store, Demo Store India 345-659
                </h6>
                <h6 className="h6">
                  <i class="fa fa-address-card" aria-hidden="true"></i>Call Us:
                  123-456-7898
                </h6>
                <h6 className="h6">
                  <i class="fa fa-envelope" aria-hidden="true"></i>Email Us:
                  Support@Fiot.Com
                </h6>
                <h6 className="h6">
                  <i class="fa fa-fax" aria-hidden="true"></i>Fax: 123456
                </h6>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Footer2;
