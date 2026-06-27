const {test, expect} = require('@playwright/test');

test('Hey', async ({page}) => {
    await page.goto('https://www.google.com');
    await expect(page.locator('input[name="q"]')).toBeVisible();
    page.goBack();
    page.goForward();
    const searchinput = page.locator('input[name="q"]')
    const [newpage] = await Promise.all([
        page.waitForEvent('popup'),
        searchinput.click()
    ]);
    await newpage.waitForLoadState('domcontentloaded');
    page.selectOption
    page.on('dialog', dialog => dialog.accept());
    page.frameLocator('iframe[name="frame1"]').locator('input[type="text"]').fill('Hello');
    await expect(page.getByText('Click me to see alert')).toBeVisible().truthy();

    await page.route('/search?q=playwright&oq=playwright', route => route.fulfill({
        status: 200,
        body: JSON.stringify({name:'john'})
    }));
    browser.version()
    await page.getByAltText('input[name="q"]').waitFor({state:'visible'});
}); 
