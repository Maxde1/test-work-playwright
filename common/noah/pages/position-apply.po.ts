import { PositionApplyLocators } from '../locators/position-apply.locators'
import { Page } from '@playwright/test'

export class PositionApplyPage extends PositionApplyLocators{

    constructor(page: Page) {
        super(page)
    }
}
