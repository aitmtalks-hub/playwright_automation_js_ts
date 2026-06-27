import {test, expect } from '@playwright/test';

test('Browser Context', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://playwright.dev/');
});

test('Page', async ({page}) => {
    await page.goto('https://www.google.com');
    await expect(page.url()).toBe('https://www.google.com/');
    await expect((await page.title()).trim()).toBe('Google');
    console.log('Title of the page is: ' + await page.title());
});

test('Login Scenario - Invalid Password Credentials', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator('#username').type('rahulshettyacademy');
    await page.locator('#password').type('Learning@830$3mK');
    await page.locator('#signInBtn').click();
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
    // await page.locator(xpath="//a[contains(@href,'documents-request')]").click();
});

test('Login Scenario - Valid Password Credentials', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const username = page.locator('#username');
    const password = page.locator('#password');
    const signInBtn = page.locator('#signInBtn');
    await username.type('rahulshettyacademy');
    await password.type('Learning@830$3mK');
    await signInBtn.click();
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
    // await page.locator(xpath="//a[contains(@href,'documents-request')]").click();

    await username.fill('');
    await username.fill('rahulshettyacademy');
    await password.fill('');
    await password.fill('Learning@830$3mK2');
    await signInBtn.click();
    await expect(page.locator("h1.my-4")).toContainText('Shop Name');
    const count = await page.locator('.card-title a').count();
    for(let i=0; i<count; i++){
        console.log(await page.locator('.card-title a').nth(i).textContent());
    }
} );    

test('After login scenario', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const username = page.locator('#username');
    const password = page.locator('#password');
    const signInBtn = page.locator('#signInBtn');

    await username.fill('');
    await username.fill('rahulshettyacademy');
    await password.fill('');
    await password.fill('Learning@830$3mK2');
    await signInBtn.click();
    await expect(page.locator("h1.my-4")).toContainText('Shop Name');
    // await page.locator('.card-title a').nth(i).textContent();
    // await page.locator('.card-title a').last().textContent()
    // await page.locator('.card-title a').first().textContent()
    const count = await page.locator('.card-title a').count();
    for(let i=0; i<count; i++){
        console.log(await page.locator('.card-title a').nth(i).textContent());
    }
}); 

