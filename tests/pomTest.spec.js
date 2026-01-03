import {test,expect} from '@playwright/test'
import PomManager from '../pages/PomManager';
let pm;
test.describe('Test Login',()=>{
    test.beforeEach(async ({page})=>{
        pm =new PomManager(page);
            await page.pause();
    })
    test.afterEach(async ({page})=>{
        await page.close();
    })
    test('test1,login with valid credentials',async()=>{
    
        await pm.LoginPage.navigate();
        await pm.LoginPage.login('tomsmith','SuperSecretPassword!');
        await pm.SecurePage.assertLoggedInMesage('You logged into a secure area!');


        // assert value in direct test 
        const msg = await pm.SecurePage.getMessage();
        expect(msg).toContain('You logged into a secure area!');


    })
    test.only('test2,login with invalid credentials',async()=>{
        await pm.LoginPage.navigate();
        await pm.LoginPage.login('test','testttt');
        await pm.LoginPage.assertErrorMesaage('Your username is invalid!');
    })

})

test.describe.only('test des checkbox',()=>{
        test.beforeEach(async ({page})=>{
        pm =new PomManager(page);
            await page.pause();
    })
    test.afterEach(async ({page})=>{
        await page.close();
    })

    test.only('test2,tester Checkbox',async()=>{
        await pm.CheckckeckboxPage.navigate();
        await pm.CheckckeckboxPage.checkcheckbox(1);
        await pm.CheckckeckboxPage.assertCheckbox(1,true);
        await pm.CheckckeckboxPage.navigate();
        await pm.CheckckeckboxPage.checkcheckbox(2);
        await pm.CheckckeckboxPage.assertCheckbox(2,false);

       
    })

})
