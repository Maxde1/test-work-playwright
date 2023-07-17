import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
    timeout: 60000,
    retries: 1,
    use: {
        headless: false,
        viewport: { width: 1280, height: 720 },
        actionTimeout: 15000,
        ignoreHTTPSErrors: true,
        video: 'off',
        screenshot: 'on',
        navigationTimeout: 30000,
        testIdAttribute: 'data-qa'
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
