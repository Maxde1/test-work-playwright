import { PositionOverviewLocators } from '../locators/position-overview.locators'
import { Page, PlaywrightTestArgs } from '@playwright/test'
import { CareersPage } from './careers.po'

export const positionOverviewPage = {
    positionOverviewPage: async (
        {page}: PlaywrightTestArgs,
        use: (r: PositionOverviewPage) => void
    ) => {
        const positionOverviewPage = new PositionOverviewPage(page)
        use(positionOverviewPage)
    }
}

export class PositionOverviewPage extends PositionOverviewLocators{

    constructor(page: Page) {
        super(page)
    }
}
