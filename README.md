# 🎭 E2E Playwright Test Framework

## Installation
* At project root folder\
`npm ci`

* On top of installing playwright, installing the playback browsers are required\
`npx playwright install`

## Running tests
There are few options:

* Use prepared custom npm scripts. Example: `npm run test:regression-with-reports`. The full list of scripts can be found in package.json file.

* To trigger a single test simply run\
`npx playwright test ${spec file name}`

## Reporting
* After each test run Playwright automatically creates html report that can be found in the `./playwright-report` folder
* Also after each test run Playwright automatically creates Allure result that can be found in the `./allure-result`.
  Generate Allure Report use following command in root path `allure generate allure-results --clean`. After that command
will be generate allure-report that can be found in the `./allure-report`. To open allure run command `allure open allure-report`

## CI
* There are two workflows present in GitHub Actions.
* First is regression run `regression-run.yml`. There are only one param that you need choose is `branch`
* Second is regression run `signle-run-spec.yml`. There are only two param that you need choose is `branch` and `specName`



