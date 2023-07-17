import { Locator, Page } from '@playwright/test'

export class PositionApplyLocators {
    readonly page: Page
    readonly attachCvButton: Locator
    readonly fullNameInput: Locator
    readonly emailInput: Locator
    readonly phoneInput: Locator
    readonly currentCompany: Locator
    readonly linkedInUrl: Locator
    readonly twitterUrl: Locator
    readonly gitHubUrl: Locator
    readonly websiteUrl: Locator
    readonly portfolioUrl: Locator
    readonly noahSavingsUrl: Locator
    readonly additionalInfo: Locator
    readonly demographicSurvey: Locator
    readonly submitButton: Locator

    constructor(page: Page) {
        this.page = page
        this.attachCvButton = page.getByTestId('input-resume')
        this.fullNameInput = page.locator('[name="name"]')
        this.emailInput = page.locator('[name="email"]')
        this.phoneInput = page.locator('name="phone"')
        this.currentCompany = page.locator('[name="org"]')
        this.linkedInUrl = page.locator('[name="urls[LinkedIn]"]')
        this.twitterUrl = page.locator('[name="urls[Twitter]"]')
        this.gitHubUrl = page.locator('[name="urls[GitHub]"]')
        this.websiteUrl = page.locator('[name="urls[Website]"]')
        this.portfolioUrl = page.locator('[name="urls[Portfolio]"]')
        this.noahSavingsUrl = page.locator('[name="urls[Other]"]')
        this.additionalInfo = page.locator('[name="comments"]')
        this.demographicSurvey = page.getByTestId('candidate-location-select')
        this.submitButton = page.getByTestId('btn-submit')
    }
}
