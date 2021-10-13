import React, { Component } from "react";
import "./categoryheader2.css";

class Categoryheader2 extends Component {
  render() {
    return (
      <div class="header">
        <a href=" " class="logo">
          ELEMENTS
        </a>
        <div class="header-right">
          <a href="#home">HOME</a>
          <a href=" ">ELEMENTS</a>
          <a href=" ">CATEGORY</a>
        </div>
      </div>
    );
  }
}

export default Categoryheader2;
<div class="breadcrumb-section">
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <div class="page-title">
          <h2>elements</h2>
        </div>
      </div>
      <div class="col-sm-6">
        <nav aria-label="breadcrumb" class="theme-breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href=" ">home</a>
            </li>
            <li class="breadcrumb-item" aria-current="page">
              elements
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              category
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</div>;
