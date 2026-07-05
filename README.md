# TS-with-Playwright-fm-redmine-

## Summary of the repository
This project contains automated end-to-end UI tests for redmone website using Playwright and TypeScript 
The pipeline automatically:
- installs dependencies
- runs Playwright tests
- generates Allure results
- builds Allure report
- deploys report to GitHub Pages
  
## Requirements
Before running the project locally, make sure you have installed:
- Node.js (>= 18)
- npm or yarn
- Git

## Steps to install
Clone the repository:
git clone https://github.com/Oleh-Olyn/TS-with-Playwright-fm-redmine-.git
Navigate to project folder:
cd TS-with-Playwright-fm-redmine-
Install dependencies:
npm install
Install Playwright browsers:
npx playwright install --with-deps

## Steps to launch tests
Run all tests:
npx playwright test
Run tests in UI mode:
npx playwright test --ui
Run a specific test file:
npx playwright test tests/example.spec.ts

## Steps to create Allure report
1. Run tests with Allure results
npx playwright test
This generates results in:
allure-results/
2. Generate Allure report
npx allure generate allure-results --clean -o allure-report
3. Open report locally
npx allure open allure-report

Allure Report link:
https://oleh-olyn.github.io/TS-with-Playwright-fm-redmine-/
