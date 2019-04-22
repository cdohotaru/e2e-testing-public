const productInfoCommands = {
  waitPageLoaded() {
    return this.waitForElementVisible("@headerMessage");
  },
  assertProductInfoVisible(productInfo) {
    const name = `[data-test-id="${productInfo.id}-name"]`;
    const price = `[data-test-id="${productInfo.id}-price"]`;
    const href = `[data-test-id="${productInfo.id}-href"]`;
    this.waitForElementVisible(name)
      .expect.element(name).text.to.equal(productInfo.name);
    this.waitForElementVisible(price)
      .expect.element(price).text.to.equal(productInfo.price);
    this.getAttribute(href, "href", (result) => {
      this.assert.equal(result.value, productInfo.href);
    });
  },
};

const productInfo = {
  elements: {
    headerMessage: {
      selector: "[data-test-id=\"headerMessage\"]",
    },
  },
  commands: [productInfoCommands],
};

export default productInfo;
