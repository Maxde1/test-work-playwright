import { test } from '../../common/noah/fixtures'
import { COMPANY_TAB_OPTIONS } from '../../common/noah/constants'


test('Check header', async ({ page, welcomePage}) => {
    await page.goto('https://noah.com/')
    await welcomePage.mainHeader.selectOptionFromCompanyDropDown(COMPANY_TAB_OPTIONS.CAREERS)
    await page.pause()
})
