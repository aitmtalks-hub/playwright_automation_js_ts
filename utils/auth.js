import { expect } from '@playwright/test';

export async function loginAndSaveState(page) {

    await page.goto('https://rahulshettyacademy.com/client/');

    if (await page.getByText('ZARA COAT 3').isVisible()) {
        console.log('Already logged in, skipping login steps.');
        return;
    }

    if(page.locator('#userPassword').isVisible()) {
        console.log('Login page is visible, proceeding with login steps.');
        await page.locator('#userEmail')
        .fill('sampreet.9090@gmail.com');

    await page.locator('#userPassword')
        .fill('sampreet');

    await page.locator('#login')
        .click();

    await expect(
        page.getByText('ZARA COAT 3')
    ).toBeVisible();

    await page.context().storageState({
        path: 'playwright/.auth/user.json'
    });
    }
}