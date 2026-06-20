import { test, expect } from '@playwright/test';

test('should test dropdown', async ({ page }) => {
  await page.goto('/dropdown');

    // Verify main heading exists
    const heading = page.locator('h3');
    await expect(heading).toContainText('Dropdown List');

    // Verify the dropdown exists  
    const dropdown = page.locator('#dropdown');
    await expect(dropdown).toBeVisible();

    // Verify the default selected option is "Please select an option" and is disabled
    const disabledOption = dropdown.locator('option:has-text("Please select an option")');
    await expect(disabledOption).toHaveAttribute('disabled');
    //const defaultValue = await dropdown.inputValue();
    //expect(defaultValue).toBe('Please select an option');

    // Select the first option (Option 1)
    await dropdown.selectOption({ label: 'Option 1' });
    const selectedOption1 = await dropdown.inputValue();
    expect(selectedOption1).toBe('1');

    // Select the second option (Option 2)
    await dropdown.selectOption({ label: 'Option 2' });
    const selectedOption2 = await dropdown.inputValue();
    expect(selectedOption2).toBe('2');
});