const productsCommands = {
  waitPageLoaded() {
    return this.waitForElementVisible("@headerMessage");
  },
  assertProductsVisible(noOfProducts) {
    this.api.elements("css selector", "[data-test-id=\"productItem\"]", (result) => {
      this.assert.equal(result.value.length, noOfProducts);
    });
  },
  expectProductIdIsVisible(productId) {
    this.waitForElementVisible(`[data-test-id="${productId}"]`);
  },
  expectProductNameIsVisible(productId, name) {
    const element = `[data-test-id="${productId}-name"]`;
    return this.waitForElementVisible(element)
      .expect.element(element).text.to.equal(name);
  },
  expectProductPriceIsVisible(productId, price) {
    const element = `[data-test-id="${productId}-price"]`;
    return this.waitForElementVisible(element)
      .expect.element(element).text.to.equal(price);
  },
  expectProductHrefIsVisible(productId, href) {
    const element = `[data-test-id="${productId}-href"]`;

    return this.getAttribute(element, "href", (result) => {
      this.assert.equal(result.value, href);
    });
  },
  navigateToProductItemPageWithId(productId) {
    const element = `[data-test-id="${productId}-href"]`;
    return this.waitForElementVisible(element).click(element);
  },
};

const products = {
  elements: {
    headerMessage: {
      selector: "[data-test-id=\"headerMessage\"]",
    },
    products: {
      selector: "[data-test-id=\"productItem\"]",
    },
  },
  commands: [productsCommands],
};

export default products;
