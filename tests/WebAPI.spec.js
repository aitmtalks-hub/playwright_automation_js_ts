import {test, expect, request} from '@playwright/test';
import {UtilsAPI} from '../utils/UtilsAPI';

const loginPayLoad = {userEmail:"anshika@gmail.com",userPassword:"Iamking@000"};

let responseJson;
test.beforeAll(async () => {
    const apiContext = await request.newContext();

    const utilsAPI = new UtilsAPI();
    responseJson = await utilsAPI.loginAPI(apiContext, loginPayLoad);
    console.log("responseJson: ", responseJson);
});

test('@API Place the order', async ({page})=>
{ 
    await page.addInitScript(value => {

        window.localStorage.setItem('token',value);
    }, responseJson.token );
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();
    const rows = await page.locator("tbody tr");

});


