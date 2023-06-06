import Page from "./page";

class LoginPage extends Page{

//  variables list 

    get emailAdressTab()   { return $('#email'); }
    get passwordTextbox()  { return $('#password'); }
    get loginButton()      { return $("//span[contains(text(), 'Login with email')]"); }   
    get acceptAllButton()  { return $("//div[@id='root']/div[3]/div[@class='CardContentView--12dpohu bHwcmd']/div/div[2]/div[2]/button[1]"); }
    get downloadButton()   { return $("//div[text()='Download app']"); }
    get overviewButton()   { return $("//div[@class='Spacing--1nc0q8d fObYoj']/div[1]/a[@href='/']"); }
    get statisticsButton() { return $("//a[@href='/statistics']"); }
    get transactionHistoryButton() { return $("//a[@href='/transactions']"); }
    get referralsButton()   { return $("//a[@href='/referrals']"); }
    get achievementButton() { return $("//a[@href='/achievements']"); }
    get myProfileButton()   { return $("div:nth-of-type(1) > .sc-dPwPAC.uEODU  .Spacing--1nc0q8d.kMjeCA > .Flex--8h5f1z.fOdUEO"); }
    get vButton()           { return $("//div[@id='root']/div[2]/div[2]/div/header/div/div[1]/div[@class='Flex--8h5f1z gBzRLa']/div[2]//button/div"); }

//  assertion variables list list

    // get myProfilePageHeader()  { return $(".INmTe.fgKpYU.sc-DooS.sc-duSInm"); }
    // get myProfilePageTitleCP() { return $('#Change password'); }
    
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
