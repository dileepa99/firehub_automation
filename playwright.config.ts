import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000, // 30 seconds
  retries: 0,
  fullyParallel: false,

  use: {
    headless: true,
    viewport: { width: 1920, height: 1080 }, 
    screenshot: 'only-on-failure',
    video: 'on',
    trace: 'on-first-retry',
    baseURL: 'https://example.com',
  },

  reporter: [
    ['list'],
    ['html', { open: 'always' }]
  ],
});
