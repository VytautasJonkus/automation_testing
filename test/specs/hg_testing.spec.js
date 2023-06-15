import loginPage from '../PageObjects/HG_page_objects/login.page';

describe('Practice and learning to create automation tests', () => {
    before(async () => {
        await browser.url ('/login');
        loginPage.login('vyckatest1@gmail.com', 'Testing123');

    });
    it('Test 1 - Should be Information alert after changing mode ', async() => {
        let jumptaskAlert = $("[class='Spacing--1nc0q8d smAke']");
        let jumptaskAlertText = $("//div[@id='root']/div[1]/div[@class='Toastify']")

        loginPage.buttonWalletMode.click();
        await jumptaskAlert.waitForDisplayed();
        await expect(jumptaskAlertText).toHaveTextContaining("now earning in the JumpTask mode!");

        await loginPage.buttonWalletMode.click();
        await jumptaskAlert.waitForDisplayed();
        await await expect(jumptaskAlertText).toHaveTextContaining("now earning in the Honeygain mode!");

    });
    it('Test 2 - Should be a success alert after clicking to copy referral code', async() => {
        let referralsCopyButton = $("//div//button[.='Copy']");
        let copiedToClipboardAllert = $("div[type='success']");
        
        loginPage.buttonReferrals.click();
        await buttonReferrals.click();
        await copiedToClipboardAllert.waitForDisplayed();
        await expect(copiedToClipboardAllert).toHaveAttributeContaining("type", "success");

    });
    
});