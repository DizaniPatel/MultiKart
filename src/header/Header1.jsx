import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./header1.css";
import { withRouter } from "react-router-dom";

//import { Link } from "react-router-dom";

class Header1 extends Component {
  redirectToHome = () => {
    const { history } = this.props;
    if (history) history.push("/");
  };
  redirectToCategory = () => {
    const { history } = this.props;
    if (history) history.push("/category");
  };
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" className="navbar ">
        <Navbar.Brand href="">
          <div onClick={this.redirectToHome}>
            <img
              alt=""
              src="https://multikart-react.vercel.app/assets/images/icon/logo/18.png"
              className="d-inline-block "
            />
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"> </Nav>

          <Nav>
            <NavDropdown title="HOME" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">New Demos</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2"> Clothing</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Basics</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.4">Beauty</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="SHOP" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">New Demos</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2"> Clothing</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Basics</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.4">Beauty</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="PRODUCTS" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">New Demos</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2"> Clothing</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Basics</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.4">Beauty</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="FEATURES" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">New Demos</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2"> Clothing</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">
                <div onClick={this.redirectToCategory}>Category</div>
                {/* <Link to="/category">Category</Link>*/}
              </NavDropdown.Item>

              <NavDropdown.Item eventKey="4.4">Beauty</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="PAGES" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">New Demos</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2"> Clothing</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Basics</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.4">Beauty</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="BLOGS" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">New Demos</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2"> Clothing</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Basics</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.4">Beauty</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(Header1);
