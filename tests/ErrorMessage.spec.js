/*
  Test: OrangeHRM - invalid password shows error
  Purpose: Demonstrate a negative login scenario and assert the error message.
  Notes:
  - Contains a deliberate failing assertion to verify this spec file is executed. Remove it once validated.
  - Uses an awaited locator-based assertion for robustness (auto-waiting and clearer failures).
  - Project configuration picks tests from ./tests as defined in playwright.config.js.
*/
import { test, expect } from '@playwright/test';

/*
  Scenario: Attempt login with invalid credentials and verify the application displays an error.
  Why: Ensures the authentication flow surfaces meaningful feedback to the user.
  Implementation details:
  - Directly navigate to the dashboard; unauthenticated users get redirected to the login page.
  - Uses semantic selectors where possible; XPath is kept for the login button but could be improved.
*/
test('OrangeHRM - invalid password shows error', async ({ page }) => {
    // Navigate directly to the OrangeHRM login page (app redirects here when not authenticated)
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

   // Removed deliberate failing assertion - test now runs properly

   // Enter a username using the placeholder selector (semantic and resilient to DOM shifts)
   await page.getByPlaceholder("Username").type("Sam");
   // Enter an invalid password to trigger an authentication error on submit
   // Using an attribute selector keeps this selector relatively stable across UI changes
   await page.locator("input[name='password']").type("Sam");
   // Click the Login button.
   // Note: This uses an XPath selector; prefer role/text-based selectors for long-term stability when possible.
   await page.locator("//*[@id='app']/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button").click();
   // Prefer a robust, awaited assertion that auto-waits for the element and its text.
   // - toHaveText waits for the locator to be attached, visible, and to match the expected text.
   // - Using a case-insensitive RegExp improves resilience to minor copy changes.
   const errorLocator = page.locator('.oxd-alert-content-text');
   await expect(errorLocator).toHaveText(/Invalid credentials/i);
   const errorMessage = await errorLocator.textContent();
   // Debug log: helpful when reviewing CI logs or triaging failures
   console.log("The error message is " + errorMessage);
});
