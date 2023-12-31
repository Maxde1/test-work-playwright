import { test } from '../../app/noah/common/fixtures'
import { COMPANY_TAB_OPTIONS } from '../../app/noah/common/constants'
import { resumeEntries } from '../../app/noah/data-repository/resume-entries'
import { PositionApplyPage } from '../../app/noah/pages/position-apply.po'
import { PositionOverviewPage } from '../../app/noah/pages/position-overview.po'
import { logger } from '../../app/noah/common/logger'

const resumeEntities = [
    {
        name: 'only with valid required fields',
        resumeEntity: resumeEntries.getResumeOnlyWithRequiredValidFields()
    },
    {
        name: 'only with invalid required fields',
        resumeEntity: resumeEntries.getResumeOnlyWithRequiredInvalidFields()
    }
]

test.describe.parallel('application form test', () => {
    test.beforeEach(async ({ page }, testInfo) => {
        logger.info('Visit welcome page')
        await page.goto('/');
    });

    resumeEntities.forEach(entity => {
        test(`Check application form with ${entity.name}`, async ({
                                    context,
                                    welcomePage,
                                    careersPage,
                                }) => {
            const positionName = 'Software Development Engineer in Test (SDET)'
            const resumeEntity = await resumeEntries.getResumeOnlyWithRequiredValidFields()
            await welcomePage.mainHeader.selectOptionFromCompanyDropDown(COMPANY_TAB_OPTIONS.CAREERS)
            const newPage = await careersPage.openPositionByName(positionName, context)
            const positionOverviewPage = new PositionOverviewPage(newPage)
            await positionOverviewPage.applyButton.click()
            const positionApplyPage = new PositionApplyPage(newPage)
            await positionApplyPage.fillApplicationForm(resumeEntity)
        })
    })
})

