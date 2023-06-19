import loginPage from '../PageObjects/HG_page_objects/login.page';

describe('Practice and learning to create automation tests', () => {
    before(async () => {
        await browser.url ('/login');
        loginPage.login('vyckatest1@gmail.com', 'Testing123');

    });
    it('Test 1 - Should be Information alert after changing mode ', async() => { 
        let alertJt = $(".toast-container:nth-of-type(1) [class='Spacing--1nc0q8d smAke']");
        let alertJtText = $("//div[@id='root']/div[1]/div[@class='Toastify']")

        loginPage.buttonWalletModeJT.click();
        await alertJt.waitForDisplayed();
        await expect(alertJtText).toHaveTextContaining("now earning in the JumpTask mode!");

        loginPage.buttonWalletModeHG.click();
        await alertJt.waitForDisplayed();
        await await expect(alertJtText).toHaveTextContaining("now earning in the Honeygain mode!");

    });
    it('Test 2 - Should be a success alert after clicking to copy referral code', async() => {
        let buttonRefCopy= $("//div//button[.='Copy']");
        let alertCopy = $("div[type='success']");
        
        loginPage.buttonReferrals.click();
        await buttonRefCopy.click();
        await alertCopy.waitForDisplayed();
        await expect(alertCopy).toHaveAttributeContaining("type", "success");

    });
    
});