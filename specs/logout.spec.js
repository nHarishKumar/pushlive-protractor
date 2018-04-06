//Include Pages
var data = require('../testData/logoutData.json');
var logoutPage = require('../pageObjects/logout.po.js');

//PushLive Logout 
describe('Pushlive Logout', function() {
    it('Logout', function() {
        expect(browser.getTitle()).toContain(data.title);
    });

    it('Pushlive logout', function() {
        logoutPage.logoutAsObject(data);
        logoutPage.clickLogoutText(data);
    });
});