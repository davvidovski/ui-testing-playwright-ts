import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // Directory where your tests are located
  timeout: 30000,  // Global timeout for each test
  expect: {
    timeout: 5000,  // Timeout for assertions
  },
  use: {
    headless: true,  // Run tests in headless mode
    screenshot: 'only-on-failure',  // Take screenshots only on failure
    video: 'retain-on-failure',  // Record video only on failure
    trace: 'on',  // Record traces for debugging
  },
  projects: [
    {
      name: 'Desktop Chromium',
      use: { ...devices['Desktop Chrome'] },  // Test on desktop Chrome
    },
    // {
    //   name: 'Firefox',
    //   use: { browserName: 'firefox' },  // Test on Firefox
    // },
    // {
    //   name: 'WebKit',
    //   use: { browserName: 'webkit' },  // Test on WebKit
    // },
  ],
});
