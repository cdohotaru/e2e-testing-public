import * as constants from "../constants";

export default {
  "@tags": ["productPageTests"],

  after: (client, done) => {
    client.end(() => {
      done();
    });
  },

  before: (client) => {
    const loginPage = client.page.login();

    loginPage.open(constants.urls.login);

    loginPage.loginUser(client.globals.username, client.globals.password);
  },

  "Opens the Product list page and checks that 10 products are visible": (client) => {
    const productsPage = client.page.products();

    const noOfVisibleProducts = 10;

    productsPage.waitPageLoaded();
    productsPage.assertProductsVisible(noOfVisibleProducts);
  },

  "Opens the Product list page and checks the product information": (client) => {
    const productId = 3;
    const productName = "Cheese - Le Cheve Noir";
    const price = "55 $";
    const href = `http://${constants.urls.login}/item/3`;

    const productsPage = client.page.products();

    productsPage.expectProductIdIsVisible(productId);
    productsPage.expectProductNameIsVisible(productId, productName);
    productsPage.expectProductPriceIsVisible(productId, price);
    productsPage.expectProductHrefIsVisible(productId, href);
  },

  "Opens the Product list page and navigates to the product item page": (client) => {
    const productItemPage = client.page.productItem();
    const productItemInfo = {
      id: 3,
      name: "Cheese - Le Cheve Noir",
      price: "55 $",
      href: `http://${constants.urls.login}/item/3`,
    };

    const productsPage = client.page.products();

    productsPage.navigateToProductItemPageWithId(productItemInfo.id);
    productItemPage.waitPageLoaded();
    productItemPage.assertProductInfoVisible(productItemInfo);
  },
};
