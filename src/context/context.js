import React, { Component } from "react";
import { linkData } from "./linkData";
const ProductContext = React.createContext();

// Provider
// Consumer

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 3,
    links: linkData,
    cart: [],
  };

  // HANDLE SIDEBAR
  handleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };

  // HANDLE SIDECART
  handleCart = () => {
    this.setState({ cartOpen: !this.state.cartOpen });
  };

  // CLOSE CART
  closeCart = () => {
    this.setState({ cartOpen: false });
  };

  // OPEN
  openCart = () => {
    this.setState({ cartOpen: true });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleCart: this.handleCart,
          closeCart: this.closeCart,
          openCart: this.openCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
