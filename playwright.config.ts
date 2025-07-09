import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { open: 'never' }], ['list']],
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'https://react.worklenz.com/auth/login', // actual base URL
  },

  projects: [
    {
      name: 'Chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
      },
    },
    {
      name: 'Firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },
    {
      name: 'Edge',
      use: {
        ...devices['Desktop Edge'],
        channel: 'msedge',
      },
    },
  ],

  // Optional: Uncomment if you want to run a dev server before tests
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
