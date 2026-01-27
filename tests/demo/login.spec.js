import { test } from '@playwright/test';
import {LoginPage} from '../pages/login.js';

test('test demo/login.spec.js', async ({ page }) => {

  const Login = new LoginPage(page);

 await Login.gotoLoginPage();   
 await Login.login('tomsmith','SuperSecretPassword!');

  
  // await page.goto('https://the-internet.herokuapp.com/login');
  // await page.getByLabel('Username').click
  // await page.getByLabel('Username').fill('tomsmith');
  // await page.getByLabel('Password').click();
  // await page.getByLabel('Password').fill('SuperSecretPassword!');
  // await page.getByRole('button', { name: 'Login' }).click();
  // await page.waitForTimeout(5000);
  
});
