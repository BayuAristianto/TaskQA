import { remote } from "webdriverio";

const capabilities = {
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:appPackage': 'com.android.settings',
    'appium:appActivity': '.Settings',
  };

const options = {
    hostname : 'localhost',
    port : 4723,
    loglevel: 'info',
    capabilities   
}

async function main(){
    const driver = await remote(options)
    try {
        const batteryItem = await driver.$('//*[@text="Battery"]')
        await batteryItem.click()
    } finally {
        await driver.pause(3000)
        await driver.deleteSession()
    }
}

main().catch(console.log)