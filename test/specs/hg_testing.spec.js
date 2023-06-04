import loginPage from '../PageObjects/HG_page_objects/login.page';

describe('Practice and learning to create automation tests', () => {
    before(async () => {
        await browser.url ('/login');
        loginPage.loginForm('vyckatest1@gmail.com', 'Testing123');
   
    // });
    // it('Test 1 - Achievement "Honeygain Budddy" should be disable when requitments not met ', async() => {
    //     //New test, achievement must be disable when Progress 0/1 
    //     // let honeyBuddyButton = $("//h3[.='Honeygain Buddy']");
    //     // await honeyBuddyButton.click();

    });
    it('Test 2 - Should be Information alert after enabling JumpTask mode ', async() => {
        let jumptaskAlert = $("//div[@class='Toastify__toast-container Toastify__toast-container--bottom-right']");
        let jumptaskAlertText = $("//div[@id='root']/div[1]/div[@class='Toastify']")

        loginPage.modeButton.click();
        await jumptaskAlert.waitForDisplayed();
        await expect(jumptaskAlertText).toHaveTextContaining("now earning in the JumpTask mode!");
 
    // });
    // it('Test 2 - Information alert after enabling Honeygain mode', async() => {
    //     loginPage.statisticsButton.click();
        
    // });
    // it('Test 4 ', async() => {
    //     loginPage.historyButton.click();
        
        // waitUntil(browser.toHaveUrl('https://dashboard.honeygain.com/transactions'));
        // await expect(browser).toHaveUrl("https://dashboard.honeygain.com/transactions");
    });
    it('Test 5 - Should be a success alert after clicking to copy referral code', async() => {
        let referralsCopyButton = $("//div//button[.='Copy']");
        let copiedToClipboardAllert = $("div[type='success']");
        
        loginPage.referralsButton.click();
        await referralsCopyButton.click();
        await copiedToClipboardAllert.waitForDisplayed();
        await expect(copiedToClipboardAllert).toHaveAttributeContaining("type", "success");
        
    });
    it('Test 6  ', async() => {
        loginPage.achievementButton.click();
        await expect(browser).toHaveUrl("https://dashboard.honeygain.com/referrals");


    // });
    // it('Test 7 ', async() => {
    //     loginPage.unlockAchievements.click();
        
        // await expect(browser).toHaveUrl("https://dashboard.honeygain.com/achievements");    
    });
    
});