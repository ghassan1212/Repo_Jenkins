import { test, expect } from '@playwright/test';
const testdata = JSON.parse(JSON.stringify(require("../testdata.json")));

test('reading data from JSON', async ({ page }) => {
  await page.goto("https://freelance-learn-automation.vercel.app/login");

  await page.locator("input[id='email1']").fill(testdata.username);
  await page.locator("input[id='password1']").fill(testdata.password);
 // await page.locator("input[id='email1']").fill(testdata.address.area);
 // await page.locator("input[id='email1']").fill(testdata.interest.[1]);

  // await page.locator('//button[normalize-space()="Log in"]').click()
});
