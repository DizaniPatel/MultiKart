import React, { Component } from "react";
import Categoryheader2 from "./categoryheader2";
import CategoryList from "./CategoryList";
import Header1 from "../header/Header1";
import "./categoryHomepage.css";
import CategoryShoes from "./CategoryShoes";
import CategorySale from "./CategorySale";

class CategoryHomepage extends Component {
  render() {
    return (
      <body className="light ltr">
        <div className="__next">
          <div></div>
          <div>
            <div>
              <Header1 />
              <Categoryheader2 />
              <CategoryList />
              <CategoryShoes />
              <CategorySale />
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default CategoryHomepage;