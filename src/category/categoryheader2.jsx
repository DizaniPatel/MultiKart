import React, { Component } from "react";
import "./categoryheader2.css";

export default class Categoryheader2 extends Component {
  render() {
    return (
      <div class="header">
        <a href=" " class="logo">
          {this.props.name}
        </a>
        <div class="header-right">
          <a href="#home">HOME</a>
          <a href=" "> {this.props.name}</a>
          <a href=" ">{this.props.name2}</a>
        </div>
      </div>
    );
  }
}
