import { test as base } from '@playwright/test'
import { mainHeaderComponent, MainHeaderComponent } from './components/main-header.co'
import { welcomePage, WelcomePage } from './pages/welcome.po'
import { careersPage, CareersPage } from './pages/careers.po'
import { positionOverviewPage, PositionOverviewPage } from './pages/position-overview.po'

export const test = base.extend<{
    mainHeaderComponent: MainHeaderComponent
    welcomePage: WelcomePage
    careersPage: CareersPage
    positionOverview: PositionOverviewPage
}>({
    ...mainHeaderComponent,
    ...welcomePage,
    ...careersPage,
    ...positionOverviewPage
})

export { expect } from '@playwright/test';
