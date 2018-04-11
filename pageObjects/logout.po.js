class logout {

    //Locators
    constructor() {
        this.logout = element(by.xpath('.//span[@class="d-md-down-none"]'));
        this.logoutTxt = element(by.xpath('.//*[@id="dropdown"]/div/button[3]'));
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