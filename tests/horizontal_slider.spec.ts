import { test, expect } from '@playwright/test';

test('should test for horizontal slider functionality', async ({ page }) => {
  await page.goto('/horizontal_slider');

    // Verify main heading exists
    const heading = page.locator('h3');
    await expect(heading).toContainText('Horizontal Slider');

    // Verify the slider input field exists
    const sliderInput = page.locator('div.sliderContainer input[type="range"]');
    await expect(sliderInput).toBeVisible();

    // Verify the slider value display exists
    const sliderValueDisplay = page.locator('#range');
    await expect(sliderValueDisplay).toBeVisible();

    // Move the slider to the right (increase value)
    await page.getByRole('slider').fill('4');

    // Verify the slider value display updates correctly
    const updatedSliderValue = await sliderValueDisplay.textContent();
    expect(updatedSliderValue).toBe('4');
});

test('should test for horizontal slider functionality with keyboard', async ({ page }) => {
  await page.goto('/horizontal_slider');

    // Verify main heading exists
    const heading = page.locator('h3');
    await expect(heading).toContainText('Horizontal Slider');

    // Verify the slider input field exists
    const sliderInput = page.locator('div.sliderContainer input[type="range"]');
    await expect(sliderInput).toBeVisible();

    // Verify the slider value display exists
    const sliderValueDisplay = page.locator('#range');
    await expect(sliderValueDisplay).toBeVisible();

    // Move the slider to the right with keyboard (increase value)
    // each keyboard press of ArrowRight increases the slider value by 0.5
    await sliderInput.focus();
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowRight');

    // Verify the slider value display updates correctly
    const updatedSliderValue = await sliderValueDisplay.textContent();
    expect(updatedSliderValue).toBe('2');
});