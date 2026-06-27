import {test, expect } from '@playwright/test';
import {LoginCases} from '../PageObjects/Login';
import testData from '../utils/Dashboard_TestData.json';

test.only('Client App', async ({page}) => {
    const loginCases = new LoginCases(page);
    await loginCases.goTo();
    await loginCases.loginToApp(testData[0].username, testData[0].password);
    await page.locator('.card-body b').first().waitFor(); // wait for the first product name to be visible
    console.log(await page.locator('.card-body b').allTextContents());
    await expect(page.locator('.card-body b').nth(1)).toHaveText(testData[0].productName);
})