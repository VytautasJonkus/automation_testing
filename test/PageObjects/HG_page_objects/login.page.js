import Page from "./page";

class LoginPage extends Page{

//  variables list 

    get boxEmailAdress()     { return $('#email'); }
    get boxPassword()        { return $('#password'); }
    get buttonLogin()        { return $("//span/div[.='Login with email']"); }   
    get buttonCookies()      { return $("//button[.='Accept all']"); }
    get buttonDownload()     { return $("//button[.='Download app']"); }
    get buttonOverview()     { return $("//a[.='Overview']"); }
    get buttonStatistics()   { return $("//a[.='Statistics']"); }
    get buttonHistory()      { return $("//a[.='Transactions']"); }
    get buttonReferrals()    { return $("//a[.='Referrals']"); }
    get buttonAchievements() { return $("//a[.='Achievements']"); }
    get buttonWalletModeJT() { return $("//div[@class='react-toggle-track']")  }
    get buttonWalletModeHG() { return $("//div[@class='react-toggle-thumb']")  }

//  assertion variables list

    
    
//  Methods list

    async login(emailAdress, password) {
        await this.boxEmailAdress.setValue(emailAdress);
        await this.boxPassword.setValue(password);
        await this.buttonCookies.click();
        await this.buttonLogin.click();
  
    }
    
}
export default new LoginPage();
