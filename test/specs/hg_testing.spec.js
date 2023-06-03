import loginPage from '../PageObjects/HG_page_objects/login.page';

describe('Practice and learning to create automation tests', () => {
    before(async () => {
        await browser.url ('/login');
        loginPage.loginForm('vyckatest1@gmail.com', 'Testing123');
        browser.pause(5000);

    });
    it('Test 1 - Achievement "Honeygain Budddy" should be disable when requitments not met ', async() => {
        // loginPage.overviewButton.click();
        //New test, achievement must be disable when Progress 0/1 
        // let honeyBuddyButton = $("//h3[.='Honeygain Buddy']");
        // await honeyBuddyButton.click();

    });
    it('Test 2 - Should be Information alert after enabling Honeygain mode mode ', async() => {
        let jumptaskAlert = $("//div[2]/div[@role='alert']");
        let jumptaskAlertText = $("div:nth-of-type(2) > div[role='alert'] .jOqCIQ.sc-ewnqHT > span")
        browser.pause(5000);

        loginPage.modeButton.click();
        await browser.waitUntil(() => jumptaskAlert.isDisplayed());
        await expect(jumptaskAlertText).toHaveTextContaining("You’re now earning in the JumpTask mode!");
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