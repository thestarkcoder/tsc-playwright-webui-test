import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration for Practice Test Automation Login Tests
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
    testDir: './tests',

    /* Run tests in files in parallel */
    fullyParallel: true,

    /* Fail the build on CI if you accidentally left test.only in the source code */
    forbidOnly: !!process.env.CI,

    /* Retry on CI only */
    retries: process.env.CI ? 2 : 0,

    /* Opt out of parallel tests on CI */
    workers: process.env.CI ? 1 : undefined,

    /* Reporter to use */
    reporter: 'html',

    /* Shared settings for all projects */
    use: {
        /* Base URL */
        baseURL: 'https://practicetestautomation.com',

        /* Collect trace when retrying failed tests */
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',

        /* Browser viewport */
        viewport: { width: 1280, height: 720 },
    },

    /* Configure projects - Using Chrome only for minimal MVP */
    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
                channel: 'chrome'  // Use locally installed Chrome
            },
        },
    ],
});
