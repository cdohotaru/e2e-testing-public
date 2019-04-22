import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LoginPage from "./LoginPage";
import ProductsListPage from "./ProductsListPage";
import ProductPage from "./ProductPage";

function AppRouter() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={LoginPage} />
        <Route path="/products/" component={ProductsListPage} />
        <Route path="/item/:id/" component={ProductPage} />
      </div>
    </Router>
  );
}

export default AppRouter;
