import React, { useState } from "react";
import Jewellery from "./category/Jewellery";
import Electronics from "./category/electronics";
import Mensclothing from "./category/mensclothing";
import Womensclothing from "./category/womensclothing";
import CategoryHomepage from "./category/categoryHomepage";
import Home from "./Home";
import GetAllProducts from "./Pagination/GetAllProducts";
import GetSingleProduct from "./GetSingleProduct";
import { Backdrop } from "@mui/material";
import { CircularProgress } from "@mui/material";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Routes() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div>
        <Backdrop open={open} onClick={() => setOpen(false)}>
          <CircularProgress />
        </Backdrop>
      </div>
      <Router>
        <Switch>
          <Route path="/Jewellery" component={Jewellery} />{" "}
          <Route path="/electronics" component={Electronics} />{" "}
          <Route path="/mensclothing" component={Mensclothing} />{" "}
          <Route path="/womensclothing" component={Womensclothing} />{" "}
          <Route path="/category" exact component={CategoryHomepage} />
          <Route path="/GetAllProducts" exact component={GetAllProducts} />
          <Route
            exact
            path="/GetSingleProduct/:id"
            component={GetSingleProduct}
          />
          <Route path="/" exact component={Home} />{" "}
        </Switch>{" "}
      </Router>
    </>
  );
}

export default Routes;
