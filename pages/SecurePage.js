import CommonAction from "../utils/CommonAction";
import { expect } from "@playwright/test";
export default class SecurePage{
    constructor(page){
        this.actions = new CommonAction(page);

    }
    async getMessage(){
        return await this.actions.getText("#flash");
    }
    async assertLoggedInMesage(passedMessage){
       const msg = await this.getMessage()
       expect(msg).toContain(passedMessage);
    }

}