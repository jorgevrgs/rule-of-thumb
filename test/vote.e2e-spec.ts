import { expect, test } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    // Go to http://localhost:3000/
    await page.goto('https://rule-of-thumb-ten.vercel.app/');
  });

  test('Page Title', async ({ page }) => {
    await expect(page).toHaveTitle(/Rule of Thumb/);
  });

  test('Previous Rulings Title', async ({ page }) => {
    const previousRulings = page.locator('text=Previous Rulings');
    await expect(previousRulings).toBeVisible();
  });

  test('Change List to Grid', async ({ page }) => {
    // Click main[role="main"] div:has-text("List") >> nth=3
    const listView = page
      .locator('main[role="main"] div:has-text("List")')
      .nth(3);
    await expect(listView).toBeVisible();
    await listView.click();

    // Click #react-select-selectListView-option-1
    await page.locator('#react-select-selectListView-option-1').click();

    // Click main[role="main"] div:has-text("Grid") >> nth=3
    const gridView = page
      .locator('main[role="main"] div:has-text("Grid")')
      .nth(3);
    await expect(gridView).toBeVisible();
    await gridView.click();

    // Click #react-select-selectListView-option-0
    await page.locator('#react-select-selectListView-option-0').click();
    await expect(listView).toBeVisible();
  });
});
