import { test, expect } from '@playwright/test';

test('TC1 @sam', async ({ page }) => {
    await page.goto(
        'https://rahulshettyacademy.com/client/#/dashboard/dash'
    );

    await expect(
        page.getByText('ZARA COAT 3')
    ).toBeVisible();
});

test('TC2 @sam', async ({ page }) => {
    await page.goto(
        'https://rahulshettyacademy.com/client/#/dashboard/dash'
    );

    await expect(
        page.getByText('ADIDAS ORIGINAL')
    ).toBeVisible();
});