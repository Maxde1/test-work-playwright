import { Locator, Page, PlaywrightTestArgs } from '@playwright/test'
import { MainHeaderComponent } from '../components/main-header.co'
import { WelcomePage } from '../pages/welcome.po'

export class WelcomePageLocators{
    readonly page: Page
    readonly mainHeader: MainHeaderComponent

    constructor(page: Page) {
        this.page = page
        this.mainHeader = new MainHeaderComponent(page)
    }
}
