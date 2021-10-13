import React, { Component } from "react";
import "./Homepagebanner.css";
class Homepagebanner extends Component {
  render() {
    return (
      <div class="home text-center p-center home8">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="slider-contain">
                <div>
                  <h4>Headsets For all Styles</h4>
                  <h1>Starting $19</h1>

                  <button class="btn btn-solid">shop now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepagebanner;
