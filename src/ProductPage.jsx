import React, { Component } from "react";
import PropTypes from "prop-types";

import "./LoginPage.css";

import data from "./data";

import ProductItem from "./ProductItem";

class ProductPage extends Component {
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

  renderProductDetails = () => {
    if (this.state.products.length === 0) {
      return null;
    }
    const { id } = this.props.match.params;
    const product = this.state.products.find(item => item.id === Number(id));
    if (!product) {
      return null;
    }

    return (<ProductItem item={product} />);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p data-test-id="headerMessage">Find out more details about:</p>
          <div>
            {this.renderProductDetails()}
          </div>
        </header>
      </div>
    );
  }
}

export default ProductPage;

ProductPage.propTypes = {
  id: PropTypes.number.isRequired,
  match: PropTypes.object.isRequired,
};
