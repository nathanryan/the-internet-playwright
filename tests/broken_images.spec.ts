import { test, expect } from '@playwright/test';

test('should check images are loaded correctly', async ({ page }) => {
  await page.goto('/broken_images');

  // Verify main heading exists
  const heading = page.locator('h3');
  await expect(heading).toContainText('Broken Images');

  // Verify all images are loaded and not broken
  const images = page.locator('img');
  const imageCount = await images.count();

  for (let i = 0; i < imageCount; i++) {
    const img = images.nth(i);
    
    // Verify image is visible
    await expect(img).toBeVisible();
    
    // Check naturalHeight and naturalWidth - both must be > 0 for successfully loaded images
    const naturalHeight = await img.evaluate((el: any) => el.naturalHeight);
    const naturalWidth = await img.evaluate((el: any) => el.naturalWidth);
    
    expect(naturalHeight).toBeGreaterThan(0);
    expect(naturalWidth).toBeGreaterThan(0);
  }
});