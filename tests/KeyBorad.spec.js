import { test, expect } from '@playwright/test';

test("Simple alert", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Enabling Alert Handling for simple alert
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("alert");
    expect(dialog.message()).toContain("I am an alert box!");
    await dialog.accept();
  });

  await page.waitForSelector("#alertBtn");
  await page.locator("#alertBtn").click();
  await page.waitForTimeout(5000);
});
