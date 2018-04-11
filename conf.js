// An example configuration file.
exports.config = {
        directConnect: true,

        //Capabilities to be passed to the webdriver instance.
        capabilities: {
            'browserName': 'chrome'

        },


        // Framework to use. Jasmine is recommended.
        framework: 'jasmine2',

        // Spec patterns are relative to the current working directory when
        // protractor is called.
        specs: ['./specs/login.spec.js', './specs/logout.spec.js'],

        //specs: ['./specs/login.spec.js'],

        //specs: ['./specs/**/*.js'],

        onPrepare: function() {

            dataProvider = require('jasmine-data-provider');

            global.EC = protractor.ExpectedConditions;
            browser.ignoreSynchronization = true;
            browserActions = require('./utils/actions.js');
            browser.manage().window().maximize();
            SpecReporter = require('jasmine-spec-reporter').SpecReporter;
            jasmine.getEnv().addReporter(new SpecReporter({
                spec: {
                    displayStacktrace: 'all'
                }
            }));

            log4js = require('log4js');
            log4js.configure({
                appenders: { PushLive: { type: 'file', filename: './logs/executionLog.log' } },
                categories: { default: { appenders: ['PushLive'], level: 'info' } }
            });

            logger = log4js.getLogger('PushLive');

            Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

            jasmine.getEnv().addReporter(
                new Jasmine2HtmlReporter({
                    savePath: './reports/',
                    screenshotsFolder: './reports/images',
                    takeScreenshots: true
                })
            );


            HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
            jasmine.getEnv().addReporter(new HtmlScreenshotReporter({
                        dest: './results/screenshots',
                        filename: 'my-report.html',
                        captureOnlyFailedSpecs:true
                    }));

                },

                jasmineNodeOpts: {
                    defaultTimeoutInterval: 3500000
                },

        };