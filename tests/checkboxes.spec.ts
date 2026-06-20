import { test, expect } from '@playwright/test';

test('should test checkboxes', async ({ page }) => {
  await page.goto('/checkboxes');

  // Verify main heading exists
  const heading = page.locator('h3');
  await expect(heading).toContainText('Checkboxes');

  // verify the first checkbox is unchecked
  const firstCheckbox = page.locator('input[type="checkbox"]').first();
  await expect(firstCheckbox).not.toBeChecked();

  // verify the second checkbox is checked
  const secondCheckbox = page.locator('input[type="checkbox"]').nth(1);
  await expect(secondCheckbox).toBeChecked();

  // check the first checkbox
  await firstCheckbox.check();
  await expect(firstCheckbox).toBeChecked();

  // uncheck the second checkbox
  await secondCheckbox.uncheck();
  await expect(secondCheckbox).not.toBeChecked();
});