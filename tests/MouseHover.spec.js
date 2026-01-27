import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Navigate to the Semantic UI Dropdown documentation page
  await page.goto('https://semantic-ui.com/modules/dropdown.html');
  await page.waitForTimeout(1000);
  await page.locator("//body").hover();
  await page.waitForTimeout(1000);
  await page.locator(':text("Examples")').hover;
  await page.locator(':text("Examples")').click();
  await page.locator('div.ui.fluid.search.selection.dropdown').locator('input').nth(1).focus();
      
  await page.pause();
}); 
