//Website for testing
  //https://www.globalsqa.com/demo-site/select-dropdown-menu/
  import { test, expect } from '@playwright/test';
import { clear } from 'node:console';

  test('test the dropdown list', async ({ page }) => {
  // Navigate to the GlobalSQA demo site for dropdown menu
  await page.goto('https://www.globalsqa.com/demo-site/select-dropdown-menu/');
 
  await page.getByRole('combobox').selectOption('ISL');
  //This command line is to print the whole list info
  //const selectedText1 = await page.getByRole('combobox').textContent();
  //console.log("Selected option text number 1:\n " + selectedText1);

  //This commaned line is to print a specific selected option only
  const selectedValue1 = await page.getByRole('combobox').inputValue();
  console.log('Selected value:', selectedValue1);
  if (selectedValue1 === 'ISL') {
    console.log('ISL option is selected successfully.');
    } else {
        console.log('ISL option is not selected.');
}


  //await page.pause();

  await page.getByRole('combobox').selectOption('GRC');
  //This command line is to print the whole list info
  //const selectedText1 = await page.getByRole('combobox').textContent();
  //console.log("Selected option text number 1:\n " + selectedText1);
  //This commaned line is to print a specific selected option only
  const selectedValue2 = await page.getByRole('combobox').inputValue();
  console.log('Selected value:', selectedValue2);
    if (selectedValue2 === 'GRC') {
    console.log('GRC option is selected successfully.');
    } else {
        console.log('GRC option is not selected.');
}

  //await page.pause();

  await page.getByRole('combobox').selectOption('MAC');
  //const selectedText3= await page.getByRole('combobox').textContent();
  //console.log("Selected option text number 3: " + selectedText3);
  const selectedValue3 = await page.getByRole('combobox').inputValue();
  console.log('Selected value:', selectedValue3);
  if (selectedValue1 === 'MAC') {
    console.log('MAC option is selected successfully.');
    } else {
        console.log('MAC option is not selected.');
}


  //await page.pause();

});
