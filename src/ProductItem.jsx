import React from "react";
import PropTypes from "prop-types";

import "./LoginPage.css";

function ProductItem(props) {
  const { id, name, price } = props.item;
  return (
    <div data-test-id={`${id}`}>
      <h5 data-test-id={`${id}-name`}>{ name }</h5>
      <div>
        <p data-test-id={`${id}-price`}>
          {`${price} $`}
        </p>
        <a
          data-test-id={`${id}-href`}
          href={`/item/${id}`}
          className="productLink"
        >
Click here for more details
        </a>
      </div>
    </div>
  );
}

export default ProductItem;

ProductItem.propTypes = {
  item: PropTypes.object.isRequired,
};
