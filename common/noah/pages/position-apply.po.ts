import { PositionApplyLocators } from '../locators/position-apply.locators'
import { Page, PlaywrightTestArgs } from '@playwright/test'

export const positionApplyPage = {
    positionApplyPage : async (
        {page}: PlaywrightTestArgs,
        use: (r: PositionApplyPage ) => void
    ) => {
        const positionApplyPage  = new PositionApplyPage(page)
        use(positionApplyPage )
    }
}

export class PositionApplyPage extends PositionApplyLocators{

    constructor(page: Page) {
        super(page)
    }

    async fillApplicationForm(): Promise<void> {

    }
}
