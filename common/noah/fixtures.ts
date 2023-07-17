import { test as base } from '@playwright/test'
import { mainHeaderComponent, MainHeaderComponent } from './components/main-header.co'
import { welcomePage, WelcomePage } from './pages/welcome.po'
import { careersPage, CareersPage } from './pages/careers.po'
import { positionOverviewPage, PositionOverviewPage } from './pages/position-overview.po'
import { positionApplyPage, PositionApplyPage } from './pages/position-apply.po'

export const test = base.extend<{
    mainHeaderComponent: MainHeaderComponent
    welcomePage: WelcomePage
    careersPage: CareersPage
    positionOverview: PositionOverviewPage
    positionApply: PositionApplyPage
}>({
    ...mainHeaderComponent,
    ...welcomePage,
    ...careersPage,
    ...positionOverviewPage,
    ...positionApplyPage
})

export { expect } from '@playwright/test';
