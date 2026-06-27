import {test, expect} from '@playwright/test';

test('@Smart Locators', async ({page}) => {
    page.goto('https://rahulshettyacademy.com/angularpractice/');
    await page.getByLabel('Check me out if you Love IceCreams!').check();
    await expect(page.getByLabel('Check me out if you Love IceCreams!')).toBeChecked();
    await page.getByLabel('Student').check();
    await expect(page.getByLabel('Student')).toBeChecked();
    await page.getByLabel('Gender').selectOption('Female');
    await page.getByPlaceholder('Password').fill("Sushmith");
    await expect(page.getByPlaceholder('Password')).toHaveValue("Sushmith");
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.getByText('Success! The Form has been submitted successfully!.').waitFor();
    await page.getByText('Success! The Form has been submitted successfully!.').isVisible();
    await page.getByRole('link', { name: 'Shop' }).waitFor();
    await page.getByRole('link', { name: 'Shop' }).click();
    await page
    .locator(".card")
    .filter({ hasText: "Nokia Edge" })
    .getByRole("button", { name: "Add " })
    .click();

});