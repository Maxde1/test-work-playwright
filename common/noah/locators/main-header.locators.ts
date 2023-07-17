import { Locator, Page } from '@playwright/test'
import { HEADER_TABS } from '../constants'

export class MainHeaderLocators {
    readonly page: Page
    readonly companyTab: Locator

    constructor(page: Page) {
        this.page = page
        this.companyTab = page.locator('header span', {hasText: HEADER_TABS.COMPANY})
    }
}
