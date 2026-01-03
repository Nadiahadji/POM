import CommonAction from "../utils/CommonAction"
import { expect } from "@playwright/test";
export default class CheckckeckboxPage{
    constructor(page){
        this.actions=new CommonAction(page);
    }
    async navigate(){
        await this.actions.navigate('https://the-internet.herokuapp.com/checkboxes');

    }
    async checkcheckbox(index){
        await this.actions.click(`input[type="checkbox"]:nth-of-type(${index})`);
    }
    async isCheecked(index){
        return await this.actions.isChecked(`input[type="checkbox"]:nth-of-type(${index})`)
    }
    async assertCheckbox(index,exportedChecked){
        const isChecked= await this.isCheecked(index);
        expect(isChecked).toBe(exportedChecked);

    }
    
}