import { test, expect } from '@playwright/test';

test('test with tag', {
  tag: ['@smoke']
}, async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
test('my test with metadata', async ({ page }, testInfo) => {
  testInfo.annotations.push(
    { type: 'owner', description: 'Jane Smith' },
    { type: 'jira', description: 'JIRA-456' }
  );

  // test code
});
