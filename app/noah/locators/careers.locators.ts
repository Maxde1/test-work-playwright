import { Locator, Page } from '@playwright/test'
import { MainHeaderComponent } from '../components/main-header.co'

export class CareersLocators {
    readonly page: Page
    readonly mainHeader: MainHeaderComponent

    constructor(page: Page) {
        this.page = page
        this.mainHeader = new MainHeaderComponent(page)
    }

    async getPositionTitleByName(positionName: string): Promise<Locator> {
        return this.page.locator('a', { hasText: positionName })
    }
}
