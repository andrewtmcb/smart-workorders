import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',              // where your Playwright specs live
  timeout: 30 * 1000,              // 30s per test
  use: {
    headless: false,               // show browser for demo purposes
    video: 'on-first-retry',       // record video if test fails
    screenshot: 'only-on-failure', // take screenshots on failure
    baseURL: 'http://localhost:3000', // CRA dev server
    viewport: { width: 1280, height: 720 },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
});
