import loginPage from '../PageObjects/HG_page_objects/login.page';

describe('Practice and learning to create automation tests', () => {
    before(async () => {
        await browser.url ('/');
        loginPage.loginForm('vyckatest1@gmail.com', 'Testing123');
        
    });
    it('Test 1 - testing downloadd button ', async() => {
        loginPage.downloadButton.click()

    });
    it('Test 2 - testing side menu items - Overview ', async() => {
        loginPage.overviewButton.click();
        
    });
    it('Test 3 - testing side menu items - Statistics ', async() => {
        loginPage.statisticsButton.click();
        await expect(loginPage.statisticsButton).toHaveUrl("https://dashboard.honeygain.com/statistics");
        
    // });
    // it('Test 4 - testing side menu items - Transaction history ', async() => {
    //     loginPage.transactionHistoryButton.click();;
    //     // await expect(transactionHistoryButton).toHaveUrl("https://dashboard.honeygain.com/transactions");
    
    });
    it('Test 5 - testing side menu items - referrals ', async() => {
        loginPage.referralsButton.click();
        await expect(loginPage.referralsButton).toHaveUrl("https://dashboard.honeygain.com/referrals");

    });
    it('Test 6 - testing side menu items - achievements ', async() => {
        loginPage.achievementButton.click();
        await expect(loginPage.achievementButton).toHaveUrl("https://dashboard.honeygain.com/achievements");

    });
    it('Test 7 - testing My profile button', async() => {
        loginPage.myProfileButton.click();
        await expect(loginPage.myProfileButton).toBeClickable();
    
    });

    
});