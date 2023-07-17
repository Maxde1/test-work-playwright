import { Locator, Page } from '@playwright/test'

export class PositionOverviewLocators {
    readonly page: Page
    readonly applyButton: Locator

    constructor(page: Page) {
        this.page = page
        this.applyButton = page.locator('a', {hasText: 'Apply for this job'})
    }
}
