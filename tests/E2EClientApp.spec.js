import {test, expect } from '@playwright/test';
import { findSourceMap } from 'node:module';

test('Client App', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/client/');
    const username = page.locator('#userEmail');
    const password = page.locator('#userPassword');
    const loginBtn = page.locator('#login');
    await username.type('sampreet.9090@gmail.com');
    await password.type('Bruno@5656');
    await loginBtn.click();
    await page.waitForLoadState('networkidle'); // wait for all network requests to finish
    await expect(page.locator('.card-body b').nth(1)).toHaveText('ZARA COAT 3');
    const productName = "ZARA COAT 3";

    // const addToCartButton = page.locator(
    //     `//b[text()='${productName}']//parent::h5//parent::div//button[contains(.,'Add To Cart')]`
    // );
    // await addToCartButton.click();

    const products = page.locator('.card-body');
    const count = await products.count();
    for(let i=0; i<count; i++){
        if(await products.nth(i).locator('b').textContent() === productName){
            await products.nth(i).locator('text= Add To Cart').click();
            break;
        }   
    }

    await (page.locator("//div[text()=' Product Added To Cart ']"));
    await page.locator("[routerlink*='cart']").click();

    const cartItem = page.locator("div.cartSection h3");
    await expect(cartItem).toHaveText(productName);

    await page.locator("text=Checkout").click();
    await page.locator("[placeholder*='Country']").type("ind", {delay:100});
    const dropdown = page.locator(".ta-results");
    await dropdown.waitFor();
    const optionsCount = await dropdown.locator("button").count();
    for(let i=0; i<optionsCount; i++){
        const text = await dropdown.locator("button").nth(i).textContent();     
        if(text.trim() === "India"){
            await dropdown.locator("button").nth(i).click();
            break;
        }
    }
   await page.locator(".action__submit").click();
   await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderId);
 
   await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");
 
 
   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (orderId.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
   const orderIdDetails = await page.locator(".col-text").textContent();
   expect(orderId.includes(orderIdDetails)).toBeTruthy();
 
});