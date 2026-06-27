import {test, expect } from '@playwright/test';

test('Client App', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/client/');
    const username = page.locator('#userEmail');
    const password = page.locator('#userPassword');
    const loginBtn = page.locator('#login');
    await username.type('sampreet.9090@gmail.com');
    await password.type('Bruno@5656');
    await loginBtn.click();
    await page.waitForLoadState('networkidle'); // wait for all network requests to finish
    await page.waitForLoadState('domcontentloaded'); // wait for the DOM to be fully loaded
    await page.waitForLoadState('load'); // wait for the page to be fully loaded
    await page.locator('.card-body b').first().waitFor(); // wait for the first product name to be visible
    console.log(await page.locator('.card-body b').allTextContents());
    await expect(page.locator('.card-body b').nth(1)).toHaveText('ZARA COAT 3');
})