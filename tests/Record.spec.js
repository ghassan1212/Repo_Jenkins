//Website for testing
//https://freelance-learn-automation.vercel.app/signup
import { test, expect } from '@playwright/test';

test('Test for dropdown list', async ({ page }) => {
  
     await page.goto('https://freelance-learn-automation.vercel.app/signup');

     // Select an option by its index (e.g. index 2)
     // .selectOption() is the standard way to handle <select> elements in Playwright
     const value_1 = await page.locator("#state").selectOption({ index: 5 });
     console.log("Selected value by index: " + value_1);
     const value_2 = await page.locator("#state").selectOption({ label: "Goa" });
     console.log("Selected value by Label: " + value_2);
     const Value_3 = await page.locator("#state").selectOption({ value: "Delhi"}); 
     console.log("Selected value by value: " + Value_3);
     await page.waitForTimeout(5000);
     const value = await page.locator("#state").inputValue();
     console.log("Selected value is: " + value);
     const Value_4 = await page.locator("#state").textContent();
     console.log("Selected value are: " + Value_4);
     const Value_5 = await page.locator("#state").getByRole("listitem");
     console.log("Selected value are: " + Value_5);

     // Verify the selection was successful
     // Note: This assertion checks the 'value' attribute of the selected option
     // await expect(page.locator("#state")).toHaveValue("Goa");
  });
