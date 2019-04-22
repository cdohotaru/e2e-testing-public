import React, { Component } from "react";
import "./LoginPage.css";

import data from "./data";

import ProductItem from "./ProductItem";

class ProductsListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.setState({
      products: data.products,
    });
  }

  renderOneProduct = (product, index) => (
    <li
      data-test-id="productItem"
      key={index}
    >
      <ProductItem item={product} />
    </li>
  )

  renderProductList = () => (
    <ul className="productList">
      {this.state.products ? this.state.products.map((product, index) => this.renderOneProduct(product, index)) : null}
    </ul>
  )

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p data-test-id="headerMessage">These are our available products:</p>
          <div>
            {this.renderProductList()}
          </div>
        </header>
      </div>
    );
  }
}

export default ProductsListPage;
