import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./compotents/Header";
import ProductListing from "./compotents/ProductListing";
// import ProductComponent from "./compotents/ProductComponent";
import ProductDetail from "./compotents/ProductDetail";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDetail} />
          <Route> 404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}
