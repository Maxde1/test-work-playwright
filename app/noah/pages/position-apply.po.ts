import { PositionApplyLocators } from '../locators/position-apply.locators'
import { Page } from '@playwright/test'
import { ResumeEntity } from '../data-repository/resume-entity'
import { PATHS } from '../common/constants'
import { logger } from '../common/logger'

export class PositionApplyPage extends PositionApplyLocators {

    constructor(page: Page) {
        super(page)
    }

    async fillApplicationForm(resume: ResumeEntity): Promise<void> {
        logger.info('Filling application form inputs')
        await this.attachCvButton.setInputFiles(PATHS.UPLOAD_PATH + resume.cv)
        await this.fullNameInput.fill(resume.fullName)
        await this.emailInput.fill(resume.email)
        if (resume.phone) {
            await this.phoneInput.fill(resume.phone)
        }
        if (resume.currentCompany) {
            await this.currentCompany.fill(resume.currentCompany)
        }
        if (resume.linkedInUrl) {
            await this.linkedInUrl.fill(resume.linkedInUrl)
        }
        if (resume.twitterUrl) {
            await this.websiteUrl.fill(resume.websiteUrl)
        }
        if (resume.gitHubUrl) {
            await this.gitHubUrl.fill(resume.gitHubUrl)
        }
        if (resume.websiteUrl) {
            await this.websiteUrl.fill(resume.websiteUrl)
        }
        if (resume.portfolioUrl) {
            await this.portfolioUrl.fill(resume.portfolioUrl)
        }
        if (resume.noahSavingsUrl) {
            await this.noahSavingsUrl.fill(resume.noahSavingsUrl)
        }
        if (resume.demographicSurvey) {
            await this.demographicSurvey.selectOption(resume.demographicSurvey)
        }
        if (resume.additionalInfo) {
            await this.additionalInfo.fill(resume.additionalInfo)
        }
        //commented because in requirement it's not needed
        //await this.submitButton.click()
    }
}
