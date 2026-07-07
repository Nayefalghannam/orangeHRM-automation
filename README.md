# OrangeHRM Cypress Automation

End-to-end test automation suite for the [OrangeHRM demo application](https://opensource-demo.orangehrmlive.com), built with **Cypress**. Includes **Mochawesome** reporting for detailed test results and **Cypress Cloud** integration for run history, analytics, and parallel execution.

## Tech Stack

- **Cypress** — end-to-end testing framework
- **Mochawesome** — HTML/JSON test reporting with embedded screenshots
- **Cypress Cloud** — test run recording, analytics, and parallelization
- **JavaScript**

## What's Tested

- Login and logout flows
- Employee management (add/remove employee)
- Employee job details
- Personal information updates
- General navigation and integration checks

## Project Structure

```
cypress/
  e2e/              # test spec files
  support/          # custom commands and global config
  fixtures/         # test data
cypress.config.js   # Cypress configuration + reporter setup
package.json
```

## Setup

Clone the repo and install dependencies:

```bash
git clone https://github.com/Nayefalghannam/orangeHRM-automation.git
cd orangeHRM-automation
npm install
```

## Running Tests

Run the full suite headlessly in Chrome:

```bash
npx cypress run --browser chrome
```

Run a single spec file:

```bash
npx cypress run --browser chrome --spec "cypress/e2e/login.cy.js"
```

Open the interactive Cypress Test Runner:

```bash
npx cypress open
```

## Test Reports

After a run, an HTML report is generated automatically at:

```
cypress/reports/index.html
```

Open it in your browser to view pass/fail results, charts, and screenshots of any failures.

## Demo Video

Cypress test run for Personal Information module:


https://github.com/user-attachments/assets/3e01e326-0fbf-4486-9dfd-e0dc9c704766


## Cypress Cloud

This project is connected to Cypress Cloud for recorded runs and analytics. To record a run:

```bash
npx cypress run --record --key <your-record-key>
```

View run history, flaky test detection, and analytics on the [Cypress Cloud dashboard](https://cloud.cypress.io).

## Author

**Nayef Alghannam**
QA Automation | Cypress | Test Automation Bootcamp
