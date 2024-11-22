import {remote} from "webdriverio"

async function main (){
    const browser = await remote ({
        capabilities: {
            browserName: 'chrome'
        }
    })

    try {
        await browser.url('https://www.saucedemo.com/')

        const loginButton = await browser.$('#login-button')
        await loginButton.click()

    } finally {
        browser.pause(1000)
        browser.deleteSession()
    }
}