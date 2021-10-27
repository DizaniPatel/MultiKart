import React from "react";
import ReactDOM from "react-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import GetAllProducts from "./GetAllProducts";

//import Category from "./category/category";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {" "}
      <Router>
        <GetAllProducts />
      </Router>{" "}
    </Provider>{" "}
  </React.StrictMode>,
  document.getElementById("root")
);
