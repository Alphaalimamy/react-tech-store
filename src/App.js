import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import About from "./pages/AboutPage";
import Home from "./pages/HomePage";
import Contact from "./pages/ContactPage";
import Default from "./pages/Default";
import Products from "./pages/Products";
import Cart from "./pages/CartPage";
import SingleProduct from "./pages/SingleProductPages";

// HEADERS ---------------
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Sidecart from "./components/Sidecart";
// REACT-ROUTER
import { Route, Switch } from "react-router-dom";
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <>
        {/* navbar, sidebar, cart, footer */}
        <Navbar />
        <Sidebar />
        <Sidecart />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/products" exact component={Products} />
          <Route path="/product/:id" exact component={SingleProduct} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
      </>
    );
  }
}
