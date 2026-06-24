import { test, expect } from '@playwright/test';

test('should test for forgot password functionality', async ({ page }) => {
  await page.goto('/forgot_password');

    // Verify main heading exists
    const heading = page.locator('h2');
    await expect(heading).toContainText('Forgot Password');

    // Verify the email input field exists
    const emailInput = page.locator('#email');
    await expect(emailInput).toBeVisible();

    // Verify the submit button exists
    const submitButton = page.locator('#form_submit');
    await expect(submitButton).toBeVisible();

    // Enter a valid email address and submit the form
    await emailInput.fill('test@example.com');
    await submitButton.click();
});