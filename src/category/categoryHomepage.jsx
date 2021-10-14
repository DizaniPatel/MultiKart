import React, { Component } from "react";
import Categoryheader2 from "./categoryheader2";
import CategoryList from "./CategoryList";
import Header1 from "../header/Header1";
import "./categoryHomepage.css";
import CategoryShoes from "./CategoryShoes";
import CategorySale from "./CategorySale";
import Footer1 from "../Footer/Footer1";

class CategoryHomepage extends Component {
  render() {
    return (
      <div>
        <Header1 />
        <Categoryheader2 />
        <CategoryList />
        <CategoryShoes />
        <CategorySale />
        <Footer1 />
      </div>
    );
  }
}

export default CategoryHomepage;
