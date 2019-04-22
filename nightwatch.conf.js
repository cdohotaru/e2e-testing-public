require("babel-register")();

const config = {
  src_folders: ["./e2e/tests"],
  page_objects_path: "./e2e/pages",
  globals_path: "./e2e/globals.js",
  custom_commands_path: "./e2e/commands",

  webdriver: {
    start_process: true,
    server_path: "node_modules/.bin/chromedriver",
    port: 9515,
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: "chrome",
      },
    },
  },
};


module.exports = config;
