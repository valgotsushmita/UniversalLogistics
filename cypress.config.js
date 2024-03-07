const { defineConfig } = require('cypress');
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');
const { verifyDownloadTasks } = require('cy-verify-downloads');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Universal Logistics',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
    videoOnFailOnly : false,
  },
  video: true,
  e2e: {
    baseUrl :"https://ops.goutsi.com",
    defaultCommandTimeout: 8000,
    setupNodeEvents(on, config) {
      on('task', verifyDownloadTasks),
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });

      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });
    },
  },
});