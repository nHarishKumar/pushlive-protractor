//Include Pages
var data = require('../testData/loginData.json');
var loginPage = require('../pageObjects/login.po.js');
var testData = require('../testData/dataProvider_Login.json');
var testDatalgnRole = require('../testData/dp_login.json');



//PushLive Login Home Page
describe('Pushlive Login', function() {
    beforeAll(function() {
        browser.get(data.url);
        logger.info('PASS', 'Pushlive URL Verified Successfully');
    });

    it('pushlive Login Home Page', function() {
        expect(browser.getTitle()).toContain(data.title);
        logger.info('PASS', 'Title Verified Successfully');
        loginPage.loginAsObject(data);
    });

});



