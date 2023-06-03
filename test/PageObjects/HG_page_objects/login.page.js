import Page from "./page";

class LoginPage extends Page{

//  variables list 

    get emailAdressTab()     { return $('#email'); }
    get passwordTextbox()    { return $('#password'); }
    get loginButton()        { return $("//span/div[.='Login with email']"); }   
    get acceptAllButton()    { return $("//button[.='Accept all']"); }
    get downloadButton()     { return $("//button[.='Download app']"); }
    get overviewButton()     { return $("//a[.='Overview']"); }
    get statisticsButton()   { return $("//a[.='Statistics']"); }
    get historyButton()      { return $("//a[.='Transactions']"); }
    get referralsButton()    { return $("//a[.='Referrals']"); }
    get achievementButton()  { return $("//a[.='Achievements']"); }
    get unlockAchievements() { return $("//a[.='Discover Achievements']"); } 
    get modeButton()         { return $("//div[@class='react-toggle-track']")  }

//  assertion variables list

    
    
//  Methods list

    async loginForm(emailAdress, password) {
        await this.emailAdressTab.setValue(emailAdress);
        await this.passwordTextbox.setValue(password);
        await this.acceptAllButton.click();
        await this.loginButton.click();
  
    }
    async submitDownloadButton() {
        await this.downloadButton.click();
    }
    
}
export default new LoginPage();
