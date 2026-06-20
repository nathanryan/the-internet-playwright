# The Internet Playwright Tests

TypeScript-based Playwright test suite for [The Internet](https://the-internet.herokuapp.com/) - a deliberately buggy web application designed for testing automation.

## Prerequisites

- **Node.js**: Version 18 or higher
- **npm**: Comes with Node.js

## Installation

1. Clone or navigate to the project directory:
```bash
cd the-internet-playwright
```

2. Install dependencies:
```bash
npm install
```

This will install:
- `@playwright/test` - Testing framework
- `typescript` - TypeScript compiler
- Required type definitions

## Project Structure

```
the-internet-playwright/
├── tests/
│   └── example.spec.ts       # Test files
├── playwright.config.ts      # Playwright configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Project dependencies
└── README.md               # This file
```

## Running Tests

### Standard Test Run
```bash
npm test
```
Runs all tests across Chromium, Firefox, and WebKit browsers in headless mode.

### Interactive UI Mode
```bash
npm run test:ui
```
Opens Playwright's interactive test UI where you can run, pause, and debug tests in real-time.

### Headed Mode (Visible Browser)
```bash
npm run test:headed
```
Runs tests with visible browser windows so you can watch the automation in action.

### Debug Mode
```bash
npm run test:debug
```
Opens the Playwright Inspector for step-by-step debugging of tests.

## Current Tests

The project includes sample tests in `tests/example.spec.ts`:

### 1. Home Page Load Test
- Navigates to the home page
- Verifies the page title contains "The Internet"
- Checks for the welcome heading
- Confirms example links are present

### 2. Form Authentication Navigation Test
- Starts from the home page
- Clicks on the "Form Authentication" link
- Verifies navigation to the login page
- Confirms the login page heading is displayed

## Adding New Tests

Create a new test file in the `tests/` directory with the `.spec.ts` extension:

```typescript
import { test, expect } from '@playwright/test';

test('should test something', async ({ page }) => {
  await page.goto('/path-to-test');
  // Your test code here
  await expect(page).toHaveTitle('Expected Title');
});
```

## Test Reports

After running tests, an HTML report is generated automatically. View the report with:
```bash
npx playwright show-report
```

## Configuration

Tests are configured in `playwright.config.ts` with:
- **Base URL**: `https://the-internet.herokuapp.com`
- **Browsers**: Chromium, Firefox, and WebKit
- **Retries**: 2 on CI, 0 locally
- **Timeout**: 30 seconds per test
- **Trace**: Captured on first retry for debugging

## Useful Playwright Resources

- [Playwright Documentation](https://playwright.dev)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [The Internet Test Site](https://the-internet.herokuapp.com/) - Explore available test pages

## Troubleshooting

### Tests fail with "Target page, context or browser has been closed"
- Ensure you're not running multiple test instances simultaneously
- Clear browser cache: `rm -rf test-results/ playwright-report/`

### Playwright browsers not installed
```bash
npx playwright install
```

### TypeScript errors
- Ensure `tsconfig.json` is properly configured
- Run: `npm install --save-dev typescript @types/node`

## License

ISC