class logout {

    //Locators
    constructor() {
        this.logout = element(by.xpath('.//div[@class="dropdown"]'));
        //this.logoutTxt = element(by.xpath('.//ul//li[2]//div[@id="dropdown"]//button[@type="button"][3]'));  (Sysadmin)
        this.logoutTxt = element(by.xpath('.//div[@class="show dropdown-menu dropdown-menu-right"]//button[@type="button"][2]'));
    }

    //Click on Profile
    logoutAsObject(dataObj) {
        browserActions.clickOn(this.logout, "Clicked on Profile");
    }

    //click on Logout Text in Profile
    clickLogoutText(dataObj) {
        browserActions.clickOn(this.logoutTxt, "Clicked On Logout Text");
    }
}

module.exports = new logout();