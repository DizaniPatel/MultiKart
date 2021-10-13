import React, { Component } from "react";
import Homepagebanner from "./bodysection/Homepagebanner";
import SaleSection from "./bodysection/SaleSection";
import SpecialofferTitle from "./bodysection/SpecialofferTitle";
import SpecialofferDescription from "./bodysection/SpecialofferDescription";
import ProductSection from "./bodysection/ProductSection";
import SpecialofferBanner from "./bodysection/SpecialofferBanner";
import InstagramPage from "./bodysection/InstagramPage";
import Header1 from "./header/Header1";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <body className="light ltr">
        <div className="__next">
          <div></div>
          <div>
            <div>
              <Header1 />
            </div>
            <Homepagebanner />
            <SaleSection />
            <SpecialofferTitle />
            <SpecialofferDescription />
            <ProductSection />
            <SpecialofferBanner />

            <InstagramPage />
          </div>
        </div>
      </body>
    );
  }
}

export default Home;
