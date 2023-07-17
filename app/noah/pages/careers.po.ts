import { CareersLocators } from '../locators/careers.locators'
import { BrowserContext, Page, PlaywrightTestArgs } from '@playwright/test'
import { logger } from '../common/logger'

export const careersPage = {
    careersPage: async (
        { page }: PlaywrightTestArgs,
        use: (r: CareersPage) => void
    ) => {
        const careersPage = new CareersPage(page)
        use(careersPage)
    }
}

export class CareersPage extends CareersLocators {

    constructor(page: Page) {
        super(page)
    }

    async openPositionByName(positionName: string, context: BrowserContext): Promise<Page> {
        logger.info(`Opening position link with title ${positionName}`)
        const pagePromise = context.waitForEvent('page')
        await (await this.getPositionTitleByName(positionName)).click()
        const newPage = await pagePromise
        await newPage.waitForLoadState()
        return newPage
    }
}
