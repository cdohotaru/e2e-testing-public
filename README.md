This is the accompanying source code for the Principles of end-to-end web-testing article. 
To read the article follow this link: 

Commands to start and use the project:

Clone the source project:

### `git clone git@github.com:cdohotaru/e2e-testing-public.git`

Install all dependencies (run this in the project directory, that is, where the package.json file is located):

### `npm install`

Start the project. In the project directory, you can run:

### `npm start`

You can login with the username and password displayed on the login page and click around to get familiar.

To run all the tests, run this command in a Linux or Mac environment:

### `./node_modules/nightwatch/bin/nightwatch`

or

### `.\node_modules\nightwatch\bin\nightwatch` 

if you're in a Windows environment

To run a specific test you can run these commands (Linux/Mac or Windows):

### `./node_modules/nightwatch/bin/nightwatch e2e/tests/ProductPageTests.js`

### `.\node_modules\nightwatch\bin\nightwatch e2e\tests\ProductPageTests.js`

If you're on Mac or Linux you can also run:

### `npm run tests`

to run the e2e tests

Note: the e2e tests are set to run on the default port 3000. If you didn't run `npm start` on the default port, 
adjust the new port in `e2e/constants.js` before running the tests.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).