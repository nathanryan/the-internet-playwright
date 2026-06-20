import { test, expect } from '@playwright/test';

test('should add three elements', async ({ page }) => {
  await page.goto('/add_remove_elements/');

  // Verify the page title
  await expect(page).toHaveTitle("The Internet");

  // Verify main heading exists
  const heading = page.locator('h3');
  await expect(heading).toContainText('Add/Remove Elements');

  // Click on the "Add Element" button
  await page.click('text=Add Element');

  // Click on the "Add Element" button again
  await page.click('text=Add Element');

  // Click on the "Add Element" button again
  await page.click('text=Add Element');

  // Verify that there are three "Delete" buttons visible
  const deleteButtons = page.locator('button.added-manually');
  await expect(deleteButtons).toHaveCount(3);
});

test('should add and remove elements', async ({ page }) => {
  await page.goto('/add_remove_elements/');

  // Verify the page title
  await expect(page).toHaveTitle("The Internet");

  // Verify main heading exists
  const heading = page.locator('h3');
  await expect(heading).toContainText('Add/Remove Elements');

  // Click on the "Add Element" button
  await page.click('text=Add Element');

  // Verify that the "Delete" button is visible
  const deleteButton = page.locator('button.added-manually');
  await expect(deleteButton).toBeVisible();

  // Click on the "Delete" button
  await deleteButton.click();

  // Verify that the "Delete" button is no longer visible
  await expect(deleteButton).not.toBeVisible();
});