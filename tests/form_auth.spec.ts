import { test, expect } from '@playwright/test';

test('should test for form authentication login functionality', async ({ page }) => {
  await page.goto('/login');

    // Verify main heading exists
    const heading = page.locator('h2');
    await expect(heading).toContainText('Login');

    // Verify the username input field exists
    const usernameInput = page.locator('#username');
    await expect(usernameInput).toBeVisible();

    // Verify the password input field exists
    const passwordInput = page.locator('#password');
    await expect(passwordInput).toBeVisible();

    // Verify the submit button exists
    const submitButton = page.getByRole('button', { name: 'Login' })
    await expect(submitButton).toBeVisible();

    // Enter valid credentials and submit the form
    await usernameInput.fill('tomsmith');
    await passwordInput.fill('SuperSecretPassword!');
    await submitButton.click();
});

test('should test for form authentication error handling functionality', async ({ page }) => {
  await page.goto('/login');

    // Verify main heading exists
    const heading = page.locator('h2');
    await expect(heading).toContainText('Login');

    // Verify the username input field exists
    const usernameInput = page.locator('#username');
    await expect(usernameInput).toBeVisible();

    // Verify the password input field exists
    const passwordInput = page.locator('#password');
    await expect(passwordInput).toBeVisible();

    // Verify the submit button exists
    const submitButton = page.getByRole('button', { name: 'Login' })
    await expect(submitButton).toBeVisible();

    // Enter valid credentials and submit the form
    await usernameInput.fill('tomsmith');
    await passwordInput.fill('WrongPassword!');
    await submitButton.click();

    // Verify the error message is displayed
    const errorMessage = page.locator('#flash');
    await expect(errorMessage).toContainText('Your password is invalid!');
});