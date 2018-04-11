class userManagement {

    //Locators
    constructor() {
        this.userManagement = element(by.xpath('.//a[contains(@href, "#/http://sso-dev.pushinnovationlive.com/#/usermanagement")]'));
        this.filter = element(by.xpath('//div[@class="react-grid-Toolbar"]//div[@class="tools"]//button[@type="button"]'));
        this.createUser = element(by.xpath('.//button[@id="createUser"]'));
        this.verify_CreateUser_Text = element(by.xpath('.//div[@class="col"]//h3//b'));
    }

    //Click On User Management Tab SlideBar
    clickUserManagementTab(dataObj) {
        browserActions.clickOn(this.userManagement, "Clicked On User Management Tab");
    }

    //Click on Filters
    clickOnFilter(dataObj) {
        browserActions.clickOn(this.filter, "Clicked on Filter Button")
    }

    //Click On Create User Buton
    clickOnCreateUser(dataObj) {
        browserActions.clickOn(this.createUser, "Clicked on Create User Button")
    }


}

module.exports = new userManagement();