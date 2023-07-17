import { test as base } from '@playwright/test'
import { mainHeaderComponent, MainHeaderComponent } from './components/main-header.co'
import { welcomePage, WelcomePage } from './pages/welcome.po'

export const test = base.extend<{
    mainHeaderComponent: MainHeaderComponent
    welcomePage: WelcomePage
}>({
    ...mainHeaderComponent,
    ...welcomePage
})

export { expect } from '@playwright/test';
