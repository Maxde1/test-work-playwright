import { Locator, Page, PlaywrightTestArgs } from '@playwright/test'
import { MainHeaderLocators } from '../locators/main-header.locators'
import { COMPANY_TAB_OPTIONS } from '../constants'

export const mainHeaderComponent = {
    mainHeaderComponent: async (
        {page}: PlaywrightTestArgs,
        use: (r: MainHeaderComponent) => void
    ) => {
        const mainHeaderComponent = new MainHeaderComponent(page)
        use(mainHeaderComponent)
    }
}

export class MainHeaderComponent extends MainHeaderLocators {
    constructor(page: Page) {
        super(page)
    }

    async selectOptionFromCompanyDropDown(optionName: COMPANY_TAB_OPTIONS): Promise<void> {
        await this.companyTab.hover()
        await (await this.getTabOptionByName(optionName)).click()
    }

    async getTabOptionByName(optionName: string): Promise<Locator> {
        return this.page.locator('a span', {hasText: optionName})
    }
}
