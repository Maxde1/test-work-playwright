import { WelcomePageLocators } from '../locators/welcome.locators'
import { Page, PlaywrightTestArgs } from '@playwright/test'

export const welcomePage = {
    welcomePage: async (
        {page}: PlaywrightTestArgs,
        use: (r: WelcomePage) => void
    ) => {
        const welcomePage = new WelcomePage(page)
        use(welcomePage)
    }
}

export class WelcomePage extends WelcomePageLocators{
    readonly page: Page

    constructor(page: Page) {
        super(page)
    }

}
