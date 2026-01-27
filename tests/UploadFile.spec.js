import { test, expect } from '@playwright/test';
import path from 'path';

test('file upload works', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/upload');
  await page.locator("#file-upload").setInputFiles("./tests/UploadFolder/Image.gif");

  await page.locator("#file-upload").click();
  await expect(page.locator("//h3")).toHaveText("File Uploader");
});

test('multiple file upload works', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/upload');
  await page.locator("#file-upload").setInputFiles("./tests/UploadFolder/file1.txt");

  await page.locator("#file-upload").click();
  await expect(page.locator("//h3")).toHaveText("File Uploader");

  
});
