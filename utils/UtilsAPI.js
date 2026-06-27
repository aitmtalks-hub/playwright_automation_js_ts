export class UtilsAPI{
    constructor() {
        this.responseJson = null;
    }

    loginAPI = async (newContext,loginPayLoad) => {
            const response = await newContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",{
                data: loginPayLoad
            });
            this.responseJson = await response.json();
            console.log(this.responseJson.token);
            return this.responseJson;
    }
}