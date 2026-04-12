const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "wk66nz",
  e2e: {
    setupNodeEvents(on, config) {
      // 
    },
    video: true,
    screenshotOnRunFailure: true,
    reporter: 'mochawesome',

    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: true,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss" }
  },
});

