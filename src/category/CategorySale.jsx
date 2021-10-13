import React, { Component } from "react";
import "./CategorySale.css";

class CategorySale extends Component {
  render() {
    return (
      <div class="category-bg ratio_square">
        <div class="p-0 container-fluid">
          <div class="order-section row">
            <div class="p-0 col-sm-4">
              <div class="contain-block even">
                <a href=" " class="image-block">
                  <img
                    alt=""
                    src="https://multikart-react.vercel.app//_next/static/images/cat1-947e31f2645fbb4eb9817bb272606f67.jpg"
                    class="img-fluid blur-up lazyload bg-img media"
                  ></img>
                </a>
              </div>
            </div>
            <div class="p-0 col-sm-4">
              <div class="contain-block even">
                <div>
                  <h6>new products</h6>
                  <a href=" ">
                    <h2>zipper storage bag</h2>
                  </a>
                  <a href=" " class="btn btn-solid category-btn">
                    -80% off
                  </a>
                  <a href=" ">
                    <h6>
                      <span>shop now</span>
                    </h6>
                  </a>
                </div>
              </div>
            </div>
            <div class="p-0 col-sm-4">
              <div class="contain-block even">
                <a href=" " class="image-block">
                  <img
                    alt=""
                    src="https://multikart-react.vercel.app//_next/static/images/cat2-1228cf0bba01bae4640e0abff8ce6c75.jpg"
                    class="img-fluid blur-up lazyload bg-img"
                  ></img>
                </a>
              </div>
            </div>
            <div class="p-0 col-sm-4">
              <div class="contain-block even">
                <div>
                  <h6>on sale</h6>
                  <a href=" ">
                    <h2>tucker bag</h2>
                  </a>
                  <a href=" " class="btn btn-solid category-btn">
                    save 30% off
                  </a>
                  <a href=" ">
                    <h6>
                      <span>shop now</span>
                    </h6>
                  </a>
                </div>
              </div>
            </div>
            <div class="p-0 col-sm-4">
              <div class="contain-block even">
                <a href=" " class="image-block even">
                  <img
                    alt=""
                    src="https://multikart-react.vercel.app//_next/static/images/cat3-02f58218a31d0d2024577b3f86a47f33.jpg"
                    class="img-fluid blur-up lazyload bg-img"
                  ></img>
                </a>
              </div>
            </div>
            <div class="p-0 col-sm-4">
              <div class="contain-block even">
                <div>
                  <h6>summer sale</h6>
                  <a href=" ">
                    <h2>gate check bag</h2>
                  </a>
                  <a href=" " class="btn btn-solid category-btn">
                    minimum 50% off
                  </a>
                  <a href=" ">
                    <h6>
                      <span>shop now</span>
                    </h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CategorySale;
