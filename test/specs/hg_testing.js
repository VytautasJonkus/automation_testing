describe('Practice to learn creating automation tests', () => {
    before(async () => {
        await browser.url ('/');
        await browser.maximizeWindow();

        const email_AdressTab = $('#email');
        const pasword_Tab = $('#password');
        const login_Button = $("//span[contains(text(), 'Login with email')]");
        const acceptAll_Button = $("//div[@id='root']/div[3]/div[@class='CardContentView--12dpohu bHwcmd']/div/div[2]/div[2]/button[1]");

        await acceptAll_Button.click();
        await email_AdressTab.setValue('vyckatest1@gmail.com');
        await pasword_Tab.setValue('Testing123');
        await login_Button.click();

    });
    it('Test 1 - testing downloadd button ', async() => {
        const download_Button = $("//div[text()='Download app']");
        await download_Button.click();
        await expect(download_Button).toBeClickable();
    });
    it('Test 2 - testing side menu items - Overview ', async() => {
        const overview_Button = $("//div[@class='Spacing--1nc0q8d fObYoj']/div[1]/a[@href='/']")
        await overview_Button.click();
        await expect(overview_Button).toBeClickable();
    });
    it('Test 3 - testing side menu items - Statistics ', async() => {
        const statistics_Button = $("//a[@href='/statistics']");
        await statistics_Button.click();
        await expect(statistics_Button).toHaveUrl("https://dashboard.honeygain.com/statistics");
    
    });
    it('Test 4 - testing side menu items - Transaction history ', async() => {
        const transactionHistory_Button = $("//a[@href='/transactions']");
        await transactionHistory_Button.click();
        await expect(transactionHistory_Button).toHaveUrl("https://dashboard.honeygain.com/transactions");
    
    });
    it('Test 5 - testing side menu items - referrals ', async() => {
        const referrals_Button = $("//a[@href='/referrals']");
        await referrals_Button.click();
        await expect(referrals_Button).toHaveUrl("https://dashboard.honeygain.com/referrals");
    
    });
    it('Test 6 - testing side menu items - achievements ', async() => {
        const achievements_Button = $("//a[@href='/achievements']");
        await achievements_Button.click();
        await expect(achievements_Button).toHaveUrl("https://dashboard.honeygain.com/achievements");
    });
    it('Test 7 - testing My profile button', async() => {
        const myProfile_Button = $("//div[@id='root']/div[2]/div[2]/div/header/div/div[1]/div[@class='Flex--8h5f1z gBzRLa']/div[2]//button/div");
        await myProfile_Button.click();
        await expect(myProfile_Button).toBeClickable();
    });
});