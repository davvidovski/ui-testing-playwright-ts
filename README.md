# UI Testing with Playwright and POM Structure

This repository contains UI tests using [Playwright](https://playwright.dev/) with a Page Object Model (POM) structure. The tests are written in TypeScript and leverage Playwright's capabilities for web automation.

## Project Overview

- **Project Name**: `ui-testing-playwright-ts`
- **Version**: `1.0.0`
- **Description**: This project automates UI tests using Playwright with a Page Object Model (POM) structure, making tests more reusable and maintainable.

## Requirements

Ensure that you have the following installed:

- Node.js (version 16 or above)
- npm (Node Package Manager)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ui-testing-playwright-ts.git
cd ui-testing-playwright-ts
```

### 2. Install Dependencies
Run the following command to install all required dependencies:

```bash
npm install
```

### 3. Configure PLaywright browsers

```bash
npx playwright install --with-deps
```

## Running Tests

To run the Playwright tests, use the following command:

```bash
npm test
```

## Viewing Test Results

Once tests have run, Playwright will generate test results. You can view detailed results, including screenshots and traces, if configured.

## Project Structure

```bash
├── .github/                  
│   ├── workflows/                          # CI workflows for GitHub Actions
│   ├── playwright-ci-manual-run.yml        # Manual trigger for tests
│   ├── playwright-ci-on-schedule.yml       # Scheduled test runs
│   └── playwright-ci-push-pr.yml           # Tests on push or PR
├── error-screenshots/                      # Screenshots of failed tests
├── locators/                               # JSON locators for page elements
│   ├── homepageLocators.json               # Homepage element locators
├── node_modules/                           # Installed dependencies
├── pages/                                  # Page Object Models (POM)
│   ├── homepage.ts                         # Homepage actions and locators
│   └── ...                                 # Other POM files for different pages
├── test-results/                           # Test result artifacts
├── tests/                                  # Playwright test files
│   ├── homepage.spec.ts                    # Homepage test file
│   └── ...                                 # Other test files
├── .gitignore                              # Specifies files to ignore in Git
├── package-lock.json                       # Exact versions of dependencies
├── package.json                            # Project configuration
├── playwright.config.ts                    # Playwright test configuration
├── README.md                               # Project setup and usage
└── tsconfig.json                           # TypeScript configuration
```

## Configuration

You can configure the following in the playwright.config.ts file:

- Browsers: Run tests on different browsers (Chromium, Firefox, WebKit).
- Headless Mode: Toggle headless mode for faster test runs.
- Parallel Tests: Configure the number of parallel workers.
- Retries: Configure retries for failed tests.
- Timeouts: Set global or per-test timeouts.

## Continuous Integration (CI)

You can integrate the tests with CI/CD pipelines using platforms like GitHub Actions. The following workflows are provided for different use cases:

- playwright-ci-manual-run.yml: This workflow runs Playwright tests manually on demand. You can trigger it manually from the GitHub Actions interface.
- playwright-ci-on-schedule.yml: This workflow runs Playwright tests on a scheduled basis (e.g., nightly or weekly), ensuring tests are regularly executed.
- playwright-ci-push-pr.yml: This workflow automatically triggers the tests whenever changes are pushed to the main or master branch or when a pull request is created. This helps in ensuring code quality in real-time.

Each workflow is located in the .github/workflows directory and can be customized to fit your needs.

## Dependencies

The following dependencies are used in this project:

- @playwright/test: ^1.18.0: The Playwright library for running end-to-end tests in a TypeScript environment.
- @types/node: ^16.18.113: TypeScript type definitions for Node.js.
- typescript: ^4.5.4: The TypeScript compiler for transpiling TypeScript code into JavaScript.