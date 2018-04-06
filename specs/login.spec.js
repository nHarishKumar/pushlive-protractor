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

    it('Login', function() {
        expect(browser.getTitle()).toContain(data.title);
        logger.info('PASS', 'Title Verified Successfully');
    });

    it('pushlive Login Home Page', function() {
        loginPage.loginAsObject(data);
    });

    xit('Enter a valid email address', function(){
         //expect(loginPage.emErrMsgLbl.getText()).toEqual(data.emErrorMsg);
         loginPage.loginAsObject(data);
         //logger.info('PASS', 'Enter a valid email address');

    });

    xit('Enter password', function(){
         //expect(loginPage.pswErrMsgLbl.getText()).toEqual(data.pswdErrorMsg);
         //logger.info('PASS', 'Enter password');
         loginPage.loginAsObject(data);
    });


     xit('Email and password are not registered with the system', function(){
         expect(loginPage.errorMsgLbl.getText()).toEqual(data.errorMsg);
         //logger.info('PASS', 'Email and password are not registered with the system');
         //loginPage.loginAsObject(data);
    });




});


xdescribe('invalid Data validation', function() {
    beforeAll(function() {
        browser.get(data.url);
    });

    it('Login', function() {
        expect(browser.getTitle()).toContain(data.title);
    });
    it('Validate Home Page', function() {
        loginPage.login(data.userName, data.password, data.userName2);
        //loginPage.loginAsObject(data);
        expect(loginPage.errMsgLbl.getText()).toEqual(data.errorMsg);
    });
});



//Login Test with dataprovider through JSON 
xdescribe('dataProvider Login Data', function() {
    beforeAll(function() {
        browser.get('http://sso-dev.pushinnovationlive.com/#/login?origin_uri=http://customercarecrm-dev.pushinnovationlive.com');
        logger.info('PASS', 'Pushlive URL Verified Successfully')
    });

    dataProvider(testData.testCase1, function(data, description) {

        it('Sysadmin Login', function() {
            logger.info('PASS', 'Using Dataset ' + description);
            console.log('Data Set description :' + description);

            loginPage.allRoleLogin(data);
            browser.sleep(2000);
            expect(browser.getTitle()).toContain('sso');
            logger.info('PASS', 'Sysadmin login')
        });
    });

    dataProvider(testData.testCase2, function(data, description) {

        it('office Manager Login', function() {
            logger.info('PASS', 'Using Dataset ' + description);
            console.log('Data Set description :' + description);

            loginPage.allRoleLogin(data);
            browser.sleep(2000);
            expect(browser.getTitle()).toContain('sso');
            logger.info('PASS', 'office Manager login');
        });
    });

});




//Pushlive Login Test with Role using dataProvider through JSON
xdescribe('dataProvider Login Data', function() {
    beforeAll(function() {
        browser.get('http://sso-dev.pushinnovationlive.com/#/login?origin_uri=http://customercarecrm-dev.pushinnovationlive.com');
        logger.info('PASS', 'Pushlive URL Verified Successfully')
    });

    dataProvider(testDatalgnRole.testCase1, function(data, description) {

        it('Sysadmi Login', function() {
            logger.info('PASS', 'Using Dataset ' + description);
            console.log('Data Set description :' + description);

            loginPage.testLogin(data);

            browser.sleep(2000);
            //expect(loginPage.emErrMsgLbl.getText()).toEqual(testDatalgnRole.emErrorMsg);
        });
    });


});




