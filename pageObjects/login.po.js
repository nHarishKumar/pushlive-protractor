class login {

    //Xpath Locators
    constructor() {
        this.userNameTxt = element(by.id('username'));
        this.passwordTxt = element(by.id('password'));
        this.loginBtn = element(by.xpath('.//button[@type="submit"]'));

        this.errorMsgLbl = element(by.xpath('.//html/body/div[1]/div/div[3]/div/div[1]/div/div/span/span'));
        this.emErrMsgLbl = element(by.xpath('.//html/body/div[1]/div/div[3]/div/div/div/div[2]/form/div[2]/div[2]'));
        this.pswErrMsgLbl = element(by.xpath('.//html/body/div[1]/div/div[3]/div/div/div/div[2]/form/div[3]/div[2]'));
    }

    //Login With Objects
    loginAsObject(dataObj) {
        browserActions.type(this.userNameTxt, dataObj.userName);
        browserActions.type(this.passwordTxt, dataObj.password);
        //browserActions.type(this.userName2Txt, dataObj.userName2);
        browserActions.clickOn(this.loginBtn, "Clicked on Login Button");
    }

    //Login TestData with dataProviders JSON
    allRoleLogin(custDetails) {
        browserActions.type(this.userNameTxt, custDetails.email, 'Email');
        browserActions.type(this.passwordTxt, custDetails.password, 'Password');
    }

    testLogin(logdet){
        browserActions.type(this.userNameTxt, logdet.email, 'Email');
        browserActions.type(this.passwordTxt, logdet.password, 'Password');
    }
}

module.exports = new login();