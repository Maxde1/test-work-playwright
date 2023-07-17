import { test } from '../../common/noah/fixtures'
import { COMPANY_TAB_OPTIONS } from '../../common/noah/constants'


test('Check header', async ({
                                page,
                                welcomePage,
                                careersPage,
                                positionOverview
                            }) => {
    const positionName = 'Software Development Engineer in Test (SDET)'
    await page.goto('https://noah.com/')
    await welcomePage.mainHeader.selectOptionFromCompanyDropDown(COMPANY_TAB_OPTIONS.CAREERS)
    await careersPage.openPositionByName(positionName)
    await positionOverview.applyButton.click()
    await page.pause()
})
