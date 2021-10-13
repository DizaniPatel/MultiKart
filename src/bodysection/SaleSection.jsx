import React, { Component } from "react";
import "./SaleSection.css";

class SaleSection extends Component {
  render() {
    return (
      <section class="banner-padding banner-furniture ratio2_1">
        <div class="container-fluid">
          <div class="partition4 row">
            <div class="col-md-6 col-lg-3">
              <a href=" ">
                <div class="collection-banner p-right text-right">
                  <div class="img-part">
                    <img
                      alt=" "
                      src="https://multikart-react.vercel.app//_next/static/images/5-c73dd261c1c941b269fbcfb9fc765c65.jpg"
                      class="img-fluid blur-up lazyload bg-img media"
                    ></img>
                  </div>
                  <div class="contain-banner banner-4">
                    <div>
                      <h4>save 30%</h4>
                      <h2>women</h2>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-md-6 col-lg-3">
              <a href=" ">
                <div class="collection-banner p-right text-right">
                  <div class="img-part">
                    <img
                      alt=" "
                      src="https://multikart-react.vercel.app//_next/static/images/10-d8ca5f380ceb0e3d2755fed37801d6b2.jpg"
                      class="img-fluid blur-up lazyload bg-img media"
                    ></img>
                  </div>
                  <div class="contain-banner banner-4">
                    <div>
                      <h4>save 60%</h4>
                      <h2>headsets</h2>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-md-6 col-lg-3">
              <a href=" ">
                <div class="collection-banner p-right">
                  <div class="img-part">
                    <img
                      alt=" "
                      src="https://multikart-react.vercel.app//_next/static/images/8-3e04defea974ff2f2bfd983b6999d378.jpg"
                      class="img-fluid blur-up lazyload bg-img media"
                    ></img>
                  </div>
                  <div class="contain-banner banner-4">
                    <div>
                      <h4>save 60%</h4>
                      <h2>women</h2>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-md-6 col-lg-3">
              <a href=" ">
                <div class="collection-banner p-left">
                  <div class="img-part">
                    <img
                      alt=" "
                      src="https://multikart-react.vercel.app//_next/static/images/9-799c3d822bf4312a36fa1ab9573ef232.jpg"
                      class="img-fluid blur-up lazyload bg-img media"
                    ></img>
                  </div>
                  <div class="contain-banner banner-4">
                    <div>
                      <h4>save 60%</h4>
                      <h2>jewellery</h2>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SaleSection;
