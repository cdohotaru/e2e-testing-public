const loginCommands = {
  open(url) {
    this.log(`Opening url:${url}`);
    this.api.url(url);

    return this.waitForElementVisible("@usernameInput");
  },
  loginUser(username, password) {
    return this.waitForElementVisible("@submitButton")
      .setValue("@usernameInput", username)
      .setValue("@passwordInput", password)
      .click("@submitButton");
  },
};

const login = {
  elements: {
    usernameInput: {
      selector: "input[data-test-id=\"inputUsername\"]",
    },
    passwordInput: {
      selector: "input[data-test-id=\"inputPassword\"]",
    },
    submitButton: {
      selector: "button[data-test-id=\"btnLogin\"]",
    },
  },
  commands: [loginCommands],
};

export default login;
