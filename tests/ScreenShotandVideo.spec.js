import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('heading', { level: 1 }).screenshot({ path: 'screenshots/search_combobox.png' });
  await page.screenshot({ path: './screenshots/full_page_screenshot.png', fullPage: true });

  // Expect a title "to contain" a substring.
  
});
