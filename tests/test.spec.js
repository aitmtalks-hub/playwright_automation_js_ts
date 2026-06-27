// test('tab', async ({page}) => {
//     for(let i =0; i<10; i++){
//         const page = await browser.context([i]);
//         if (page.locator('input[name="q"]').isVisible()) {
//             await page.locator('input[name="q"]').click();
//         }
//         else{
//             continue;
//         }
//     });

// test('api context', async ({request,page,expect}) => {
//     const apicontext = await request.newContext({
//         baseuirl: 'https://google.com',
//         status:200;
//         bosdy: {
//             name: 'test'}
//     });
//     const response = await apicontext.get('https://google.com');
//     expect(response.ok()).toBeTruthy();
//     const responsejson = await response.json();
//     expect(responsejson.status).toBe(200);
    
//     page.locator('input[name="q"]').dragTo(page.locator('input[name="btnK"]'));
//     page.locator('input[name="q"]').selectOption('test');

//     page.frameLocator('iframe[name="frame1"]').locator('input[type="text"]').fill('Hello');

//     const responsepromise = page.waitForResponse(response=> response.url() === "https://google.com" && response.status() === 200);
//     await page.locator('input[name="q"]').click();
//     const response = await responsepromise;
//     const text1 = await page.locator('input[name="q"]').textContent();
//     const text2 = await page.locator('input[name="q"]').allTextContents();
//     const text1 = await page.locator('input[name="q"]').innerText();

    