export class LoginCases{
    constructor(page) {
        this.page = page;
        this.userName = page.locator('#userEmail');
        this.password = page.locator('#userPassword');
        this.signIn = page.locator("#login");
    }

    async goTo(){
        await this.page.goto('https://rahulshettyacademy.com/client/');
    }

    async loginToApp(username,password){
        await this.userName.fill('');
        await this.userName.fill(username);
        await this.password.fill('');
        await this.password.fill(password);
        await this.signIn.click();
        await this.page.waitForLoadState('networkidle'); // wait for all network requests to finish
        await this.page.waitForLoadState('domcontentloaded'); // wait for the DOM to be fully loaded
        await this.page.waitForLoadState('load'); // wait for the page to be fully loaded
    }
}