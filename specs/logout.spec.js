//Include Pages
var data = require('../testData/logoutData.json');
var logoutPage = require('../pageObjects/logout.po.js');

//PushLive Logout 
describe('Pushlive Logout', function() {


    it('Clicked on Profile and logout Text', function() {
        expect(browser.getTitle()).toContain(data.title);
        logoutPage.logoutAsObject(data);
        logoutPage.clickLogoutText(data);
    });
});