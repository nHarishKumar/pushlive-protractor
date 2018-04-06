class orders {

    //Locators
    constructor() {
        this.orders = element(by.xpath('.//div[@class="col-2 col-sm-2 col-md-2 col-lg-2"]//button[@class="btn btn-success btn-sm pull-right btn-width btn btn-secondary"]'));
        this.headerLbl = element(by.xpath('.//div[@class="row"]//h3//b'))
        this.fName = element(by.xpath('.//html/body/div[1]/div/div[3]/div[2]/main/div[2]/div/div/div/div/div/div/div[2]/div[1]/div[2]/div[1]/div[1]/div/input'));

        //this.submit = element(by.xpath(''));//input[starts-with(@id,'reportcombo')

    }


    // clickCreateOrderBtn(dataObj){
    //     browserActions.clickOn(this.orders,"Clicked On Create Orders Button");
    // }


    // clickCreateOrderBtn(orderDetails) {
    //         browserActions.clickOn(this.orders, "Clicked On Create Order Button");


    //         browserActions.type(this.fName, orderDetails.firstname, 'First Name');
    //         //browserActions.type(this.lName, orderDetails.lastName, 'Last Name');
    //         //browserActions.type(this.postCd, orderDetails.pCode, 'Postal Code');

    //         //browserActions.clickOn(this.submit, "Add Order Details");
    //     }


    addCreateOrder(ordDetails) {
        browserActions.clickOn(this.orders, "Add Create Order Details");
        browserActions.type(this.fName, ordDetails.firstName, 'First Name');
    }


}

module.exports = new orders();