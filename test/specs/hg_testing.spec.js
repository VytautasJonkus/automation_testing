import loginPage from '../PageObjects/HG_page_objects/login.page';

describe('Practice and learning to create automation tests', () => {
    before(async () => {
        await browser.url ('/login');
        loginPage.loginForm('vyckatest1@gmail.com', 'Testing123');
        
    });
    it('Test 1 - Downloadd button ', async() => {
        loginPage.downloadButton.click();

    });
    it('Test 2 - Overview button', async() => {
        loginPage.overviewButton.click();
        
    });
    it('Test 3 - Statistics page should have "last month" button ', async() => {
        loginPage.statisticsButton.click();
        // // waitUntil(browser).toHaveUrl("https://dashboard.honeygain.com/statistics");
        // let lastMonthButton = $("//span[.='Last month']")
        // // let last30DaysButton = $("//span[.='Last 30 days']")
        
        // await lastMonthButton.waitForExist();
        // // await last30DaysButton.waitForExist();
        // await expect(lastMonthButton).toBePresent();
        // // await expect(last30DaysButton).toBePresent();

    });
    it('Test 4 - History button ', async() => {
        loginPage.historyButton.click();
        // await expect(browser).toHaveUrl("https://dashboard.honeygain.com/transactions");
        // waitUntil(browser.toHaveUrl('https://dashboard.honeygain.com/transactions'));
    
    });
    it('Test 5 - Referrals button ', async() => {
        loginPage.referralsButton.click();
        // await expect(browser).toHaveUrl("https://dashboard.honeygain.com/referrals");

    });
    it('Test 6 - Side Menu Achievements button ', async() => {
        loginPage.achievementButton.click();
        // await expect(browser).toHaveUrl("https://dashboard.honeygain.com/referrals");


    });
    it('Test 7 - Discover Achievemnts button', async() => {
        loginPage.unlockAchievements.click();
        // await expect(browser).toHaveUrl("https://dashboard.honeygain.com/achievements");
    });
});