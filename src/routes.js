import React, { Component } from "react";
import Jewellery from "./category/Jewellery";
import Electronics from "./category/electronics";
import Mensclothing from "./category/mensclothing";
import Womensclothing from "./category/womensclothing";
import CategoryHomepage from "./category/categoryHomepage";
import Home from "./Home";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/Jewellery" component={Jewellery} />
          <Route path="/electronics" component={Electronics} />
          <Route path="/mensclothing" component={Mensclothing} />
          <Route path="/womensclothing" component={Womensclothing} />
          <Route path="/category" exact component={CategoryHomepage} />

          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
