import { Page } from '@playwright/test'
import { MainHeaderComponent } from '../components/main-header.co'

export class WelcomePageLocators{
    readonly page: Page
    readonly mainHeader: MainHeaderComponent

    constructor(page: Page) {
        this.page = page
        this.mainHeader = new MainHeaderComponent(page)
    }
}
