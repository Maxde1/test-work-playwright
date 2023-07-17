import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
    timeout: 60000,
    retries: 0,
    workers: process.env.CI ? 2 : undefined,
    reporter: [
        ['line'],
        ["allure-playwright"]
    ],
    use: {
        baseURL: 'https://noah.com/',
        headless: false,
        viewport: { width: 1280, height: 720 },
        actionTimeout: 15000,
        ignoreHTTPSErrors: true,
        video: 'off',
        screenshot: 'only-on-failure',
        navigationTimeout: 30000,
        testIdAttribute: 'data-qa',
    },
    projects: [
        {
            name: 'E2E testing with chromium',
            use: {
                browserName: 'chromium',
                viewport:  { width: 1920, height: 1080 },
            }

        },
        {
            name: 'E2E testing with firefox',
            use: { browserName: "firefox"}
        },
        {
            name: "E2E testing with Webkit",
            use: { browserName: "webkit"}
        }
    ]
}

export default config
