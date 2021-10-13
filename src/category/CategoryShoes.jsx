import React, { Component } from "react";
import "./CategoryShoes.css";

class CategoryShoes extends Component {
  render() {
    return (
      <div class="section-b-space">
        <section class="p-0 ratio2_1">
          <div class="container-fluid">
            <div class="category-border row">
              <div class="border-padding col-sm-4">
                <div class="category-banner">
                  <div>
                    <img
                      src="https://multikart-react.vercel.app//_next/static/images/cat1-947e31f2645fbb4eb9817bb272606f67.jpg"
                      alt=""
                      class="img-fluid blur-up lazyload bg-img media"
                    ></img>
                  </div>
                  <div class="category-box">
                    <a href=" ">
                      <h2>men</h2>
                    </a>
                  </div>
                </div>
              </div>
              <div class="border-padding col-sm-4">
                <div class="category-banner">
                  <div>
                    <img
                      src="https://multikart-react.vercel.app//_next/static/images/cat2-1228cf0bba01bae4640e0abff8ce6c75.jpg"
                      alt=""
                      class="img-fluid blur-up lazyload bg-img media"
                    ></img>
                  </div>
                  <div class="category-box">
                    <a href=" ">
                      <h2>women</h2>
                    </a>
                  </div>
                </div>
              </div>
              <div class="border-padding col-sm-4">
                <div class="category-banner">
                  <div>
                    <img
                      src="https://multikart-react.vercel.app//_next/static/images/cat3-02f58218a31d0d2024577b3f86a47f33.jpg"
                      class="img-fluid blur-up lazyload bg-img"
                      alt=""
                    ></img>
                  </div>
                  <div class="category-box">
                    <a href=" ">
                      <h2>kids</h2>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default CategoryShoes;
