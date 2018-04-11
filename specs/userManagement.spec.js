var data = require('../testData/userManagementData.json');
var userManagementPage = require('../pageObjects/userManagement.po.js');


describe('User Management Page', function() {
    it('User Management', function() {
        expect(browser.getTitle()).toContain(data.title);
    });

    it('Click On User Management Tab', function() {
        userManagementPage.clickUserManagementTab(data);
    });

    xit('Click on Filter', function() {
        userManagementPage.clickOnFilter(data);
    });

    it('Click On Create User', function() {
        userManagementPage.clickOnCreateUser(data);

    });

    xit('verify Text Create User', function() {
        expect(userManagementPage.verify_CreateUser_Text.getText()).toEqual(data.createUser);
        logger.info('PASS', 'Create User Text Verified');
    });
});