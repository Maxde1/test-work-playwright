import { test as base } from '@playwright/test'
import { mainHeaderComponent, MainHeaderComponent } from '../components/main-header.co'
import { welcomePage, WelcomePage } from '../pages/welcome.po'
import { careersPage, CareersPage } from '../pages/careers.po'

export const test = base.extend<{
    mainHeaderComponent: MainHeaderComponent
    welcomePage: WelcomePage
    careersPage: CareersPage
}>({
    ...mainHeaderComponent,
    ...welcomePage,
    ...careersPage,
})

export { expect } from '@playwright/test'
