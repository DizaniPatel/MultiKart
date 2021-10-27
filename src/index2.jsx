import React from "react";
import ReactDOM from "react-dom";
import store from "./FunctionalComponent/store/store";
import { Provider } from "react-redux";
import GetProducts from "./FunctionalComponent/component/GetProducts";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GetProducts />
    </Provider>{" "}
  </React.StrictMode>,
  document.getElementById("root")
);
