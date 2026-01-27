import { test, expect } from '@playwright/test';
import fs from 'fs';

const testdata = JSON.parse(fs.readFileSync("./testlogin.json", 'utf8'));

for (const data of testdata) {
    test.describe(`Login with users ${data.id}`, function () {
        test('Login To Application', async ({ page }) => {
            await page.goto("https://freelance-learn-automation.vercel.app/login");
            await page.locator("input[id='email1']").fill(data.username);
            await page.locator("input[id='password1']").fill(data.password);
        });
    });
}
