const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    experimentalSessionAndOrigin: true,
    hideXHRInCommandLog: true,
    baseUrl: "http://www.webdriveruniversity.com"
  },
  env: {
    testUrl: "https://automationteststore.com/"
  }
});
