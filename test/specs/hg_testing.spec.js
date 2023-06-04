import loginPage from '../PageObjects/HG_page_objects/login.page';

describe('Practice and learning to create automation tests', () => {
    before(async () => {
        await browser.url ('/login');
        loginPage.loginForm('vyckatest1@gmail.com', 'Testing123');
   
    });
    it('Test 1 - Achievement "Honeygain Budddy" should be disable when requitments not met ', async() => {
        // loginPage.overviewButton.click();
        //New test, achievement must be disable when Progress 0/1 
        // let honeyBuddyButton = $("//h3[.='Honeygain Buddy']");
        // await honeyBuddyButton.click();

    });
    it.only('Test 2 - Should be Information alert after enabling JumpTask mode ', async() => {
        let jumptaskAlert = $("//div[@class='Toastify__toast-container Toastify__toast-container--bottom-right']");
        let jumptaskAlertText = $("//div[@id='root']/div[1]/div[@class='Toastify']")

        loginPage.modeButton.click();
        await jumptaskAlert.waitForDisplayed();
        await expect(jumptaskAlertText).toHaveTextContaining("now earning in the JumpTask mode!");
        // loginPage.modeButton.click();
    });
    it('Test 2 - Information alert after enabling JumpTask mode', async() => {
        loginPage.statisticsButton.click();
        
    });
    it('Test 4 - History button ', async() => {
        loginPage.historyButton.click();
        
        // waitUntil(browser.toHaveUrl('https://dashboard.honeygain.com/transactions'));
        // await expect(browser).toHaveUrl("https://dashboard.honeygain.com/transactions");
    });
    it('Test 5 - Referrals button ', async() => {
        loginPage.referralsButton.click();
        // await waitUntil(browser.toHaveUrl('https://dashboard.honeygain.com/transactions'));
        // await expect(browser).toHaveUrl("https://dashboard.honeygain.com/referrals");

    });
    it('Test 6 - Side Menu Achievements button ', async() => {
        loginPage.achievementButton.click();
        await expect(browser).toHaveUrl("https://dashboard.honeygain.com/referrals");


    });
    it('Test 7 - Discover Achievemnts button', async() => {
        loginPage.unlockAchievements.click();
        
        // await expect(browser).toHaveUrl("https://dashboard.honeygain.com/achievements");    
    });
    
});