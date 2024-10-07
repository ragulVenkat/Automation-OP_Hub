import type { Options } from '@wdio/types'
import { join } from 'path'

export const config: Options.Testrunner = {
    // ====================
    // Runner Configuration
    // ====================
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json'
        }
    },
    port: 4723,
    path: '/wd/hub/',
    specs: [
        './Apptest/specs/Test1.ts'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [{
        // "appium:udid": "HA1NKE6E",
        // "appium:deviceName": "Lenovo Tab M10 FHD plus",
        // "platformName": "Android",
        // "appium:platformVersion": "10",
        // "appium:automationName": "UiAutomator2",
        // "appium:app": join(process.cwd(),'apps/ophub.apk'),
        // "appium:appPackage": "com.plenome.ophub",
        // "appium:appWaitActivity": ".views.LoginActivity",

        // "appium:udid": "emulator-5554",
        // "appium:deviceName": "emulator-5554",
        // "platformName": "Android",
        // "appium:platformVersion": "12",
        // "appium:automationName": "UiAutomator2",
        // "appium:app": join(process.cwd(),'apps/ophub.apk'),
        // "appium:appPackage": "com.plenome.ophub",
        // "appium:appWaitActivity": ".views.LoginActivity",


        "appium:udid": "NTF111NG1341D0011",
        "appium:deviceName": "Falcon",
        "platformName": "Android",
        "appium:platformVersion": "11",
        "appium:automationName": "UiAutomator2",
        "appium:app": join(process.cwd(),'apps/ophub_test_23092024.apk'),
        "appium:appPackage": "com.plenome.ophub",
        "appium:appWaitActivity": ".views.LoginActivity",
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'jasmine',
    reporters: ['spec'],
    jasmineOpts: {
        defaultTimeoutInterval: 60000,
        expectationResultHandler: function(passed, assertion) {
            // do something
        }
    }
}
