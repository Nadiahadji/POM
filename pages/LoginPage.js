import {expect} from '@playwright/test'
import CommonAction from '../utils/CommonAction'
export default class LoginPage{
  
constructor(page){
    this.actions= new CommonAction(page);
    this.usernameSelector="#username";

}  
async navigate(){
  
    await this.actions.navigate('https://the-internet.herokuapp.com/login');
}

    async login(username, password){
        await this.actions.fill(this.usernameSelector, username)
        await this.actions.fill('#password', password)
        await this.actions.click('button[type="submit"]')
    }

    async getErrorMessage(){
       return await this.actions.getText("#flash");
    }
    async assertErrorMesaage(expectMessage){
        const actualMassage= await this.getErrorMessage();
        expect(actualMassage).toContain(expectMessage);

    }



}