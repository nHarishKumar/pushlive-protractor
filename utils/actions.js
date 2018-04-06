class browserActions {

    // waitAndFindElement(element, timeout) {
    //     browser.controlFlow().execute(function() {
    //         browser.sleep(2000);
    //         timeout = timeout || 40000;
    //         return browser.wait(EC.elementToBeClickable(oElement), timeout);
    //     });
    // };


    // waitAndFindElement(element, timeout) {
    //     try {
    //         return element.isDisplayed().then(function() {
    //             return element.isEnabled().then(function() {
    //                 logger.info('Info', element + 'is displayed');
    //                 return true
    //             })
    //         })
    //     } catch (error) {
    //         logger.info('Info', element + 'is not displayed');
    //         return false
    //     }
    // };



    waitAndFindElement(element) {
        var EC = protractor.ExpectedConditions;
         return browser.wait(EC.visibilityOf(element), 50000, 'Unable to find element');
    };


 


    clickOn(element, message) {
        this.waitAndFindElement(element).then(function() {
            try {
                message = message || 'Performed Click Operation';
                return element.click().then(function() {
                    logger.info('PASS', message + ' Successfully');
                    return true;
                })
            } catch (err) {
                logger.info('ERROR', "Failed to perform Click Operation " + err.message);
                return false;
            }
        });
    }

    type(element, value, message) {
        try {
            message = message || 'Entered Text in the Text box';
            return element.clear().then(function() {
                return element.sendKeys(value).then(function() {
                    logger.info('PASS', message);
                    return true;
                })
            })
        } catch (err) {
            //logger.info('ERROR', "Failed to enter the text. " + err.message);
            return false;
        }
    }

    selectItemByTextvalue(oElement, inputText, message) {
        //this.waitAndFindElement(oElement, MAXWAITTIME).then(function(flag) {
        message = message || 'selected the option ' + inputText + 'from drop down ';
        try {
            oElement.all(by.xpath('//option[text()="' + inputText + '"]')).click().then(function() {
                logger.info('PASS', message);
                return true;
            })
        } catch (err) {
            logger.info('ERROR', "Failed to select the option based on given text " + inputText + " from drop down" + oElement);
            return false;
        };
    }
}

module.exports = new browserActions();