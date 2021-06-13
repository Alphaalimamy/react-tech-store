import React, { Component } from "react";
import { linkData } from "./linkData";
import { socialData } from "./socialData";
import { items } from "./productData";

const ProductContext = React.createContext();

// Provider
// Consumer

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 3,
    links: linkData,
    socialIcons: socialData,
    cart: [],
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    storedProducts: [],
    filteredProducts: [],
    featuredProducts: [],
    singleProduct: {},
    loading: false,
  };

  componentDidMount() {
    // from contentful items
    this.setProducts(items);
  }

  // set products
  setProducts = (products) => {
    let storeProducts = products.map((item) => {
      const { id } = item.sys;
      const image = item.fields.image.fields.file.url;
      const product = { id, ...item.fields, image };

      return product;
    });
    // featured products
    let featuredProducts = storeProducts.filter(
      (item) => item.featured === true
    );

    this.setState({
      storeProducts,
      filteredProducts: storeProducts,
      featuredProducts,
      cart: this.getStorageCart(),
      singleProduct: this.getStorageProduct(),
      loading: true,
    });
  };

  // get cart from local storage
  getStorageCart = () => {
    return [];
  };

  // get product from local storage
  getStorageProduct = () => {
    return {};
  };

  // get totals
  getTotals = () => {};

  // add totals
  addTotals = () => {};

  // sync storage
  syncStorage = () => {};

  // add to CART
  addToCart = (id) => {
    console.log(`add to cart: ${id}`);
  };

  // set singleProduct
  setSingleProduct = (id) => {
    console.log(`set single product: ${id}`);
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
          addToCart: this.addToCart,
          setSingleProduct: this.setSingleProduct,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
