import LoginPage from "./LoginPage";
import SecurePage from "./SecurePage";
import CheckckeckboxPage from "./CheckckeckboxPage";
export default class PomManager{
    constructor(page){
        this.page = page;
        this.LoginPage = new LoginPage(page);
        this.SecurePage= new SecurePage(page);
        this.CheckckeckboxPage= new CheckckeckboxPage(page);
    }
}