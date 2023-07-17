import { CareersLocators } from '../locators/careers.locators'
import { Page, PlaywrightTestArgs } from '@playwright/test'
import { WelcomePage } from './welcome.po'

export const careersPage = {
    careersPage: async (
        {page}: PlaywrightTestArgs,
        use: (r: CareersPage) => void
    ) => {
        const careersPage = new CareersPage(page)
        use(careersPage)
    }
}

export class CareersPage extends CareersLocators{

    constructor(page: Page) {
        super(page)
    }

    async openPositionByName(positionName: string): Promise<void> {
        await (await this.getPositionTitleByName(positionName)).click()
    }
}
