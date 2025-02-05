import {defineConfig, devices} from 'playwright/test';

const baseURL = 'http://localhost:3000';

export default defineConfig({
  testDir: './playwright',
  outputDir: './playwright/output',
  snapshotDir: './playwright/output',
  fullyParallel: false,
  retries: 1,
  workers: 1,
  reporter: 'html',
  use: {
    ...devices['Desktop Chrome'],
    baseURL,
    screenshot: {mode: 'on'},
    video: {mode: 'on'},
    testIdAttribute: 'test-id',
  },
  projects: [
    {
      name: 'e2e-tests',
      testDir: './playwright',
      testMatch: 'tests/*.@(spec|test).?(c|m)[jt]s?(x)',
      timeout: 120 * 1000,
      fullyParallel: false,
    },
    {
      name: 'default',
      use: {
        ...devices['Desktop Chrome'],
      },
      testDir: './app',
      timeout: 30 * 1000,
      fullyParallel: true,
      dependencies: ['e2e-tests'],
    },
  ],
});
