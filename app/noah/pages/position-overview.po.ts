import { PositionOverviewLocators } from '../locators/position-overview.locators'
import { Page } from '@playwright/test'

export class PositionOverviewPage extends PositionOverviewLocators{

    constructor(page: Page) {
        super(page)
    }
}
