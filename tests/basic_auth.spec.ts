import { test, expect } from '@playwright/test';

test('should test HTTP authentication', async ({ page }) => {
  await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth');

  // Verify the page title
  await expect(page).toHaveTitle("The Internet");

    //verify page text
  const pageText = page.locator('p');
  await expect(pageText).toContainText('Congratulations! You must have the proper credentials.');
});

test('should test authentication using context TODO', async ({ page }) => {
  await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth');

  // Verify the page title
  await expect(page).toHaveTitle("The Internet");

    //verify page text
  const pageText = page.locator('p');
  await expect(pageText).toContainText('Congratulations! You must have the proper credentials.');
});