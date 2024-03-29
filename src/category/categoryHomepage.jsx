import React, { Component } from "react";
import Categoryheader2 from "./categoryheader2";
import CategoryList from "./CategoryList";
import Header1 from "../header/Header1";
import "./categoryHomepage.css";
import CategoryShoes from "./CategoryShoes";
import CategorySale from "./CategorySale";
import Footer1 from "../Footer/Footer1";
import Footer2 from "../Footer/Footer2";

class CategoryHomepage extends Component {
  render() {
    return (
      <div>
        <Header1 />
        <Categoryheader2 name="ELEMENTS" name2="CATEGORY" />
        <CategoryList />
        <CategoryShoes />
        <CategorySale />
        <Footer1 />
        <Footer2 />
      </div>
    );
  }
}

export default CategoryHomepage;
