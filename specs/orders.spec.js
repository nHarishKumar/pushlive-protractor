//Include Pages
var data = require('../testData/ordersData.json');
var ordersPage = require('../pageObjects/orders.po.js');
var testData = require('../testData/dataProvider.json');


describe('Verifying the Dashboard Create Order Button', function() {
    it('Verify Order URL', function() {
        expect(browser.getCurrentUrl()).toContain(data.orderURL);
    });

    it('Click on Create Order', function() {
        ordersPage.addCreateOrder(data);

    });

    it('verify Create Order Text', function() {
        expect(ordersPage.headerLbl.getText()).toEqual(data.header);
        //expect(browser.getCurrentUrl()).toContain(data.createorder);
        logger.info('Create Order Text Verified');

    });


});


describe('JSON TESTDATA', function() {
    dataProvider(testData.customerInfo, function(data, description) {
        it('Add Create Order', function() {
            logger.info('PASS', 'Using Dataset ' + description);
            console.log('Data Set description :' + description);

            ordersPage.addCreateOrder(data);
            browser.sleep(2000);
            //var alert = browser.switchTo().alert();
            //expect(alert.getText()).toContain('Customer added successfully with customer id :');
            //alert.accept();
            //browser.sleep(2000);
        });


    });



});