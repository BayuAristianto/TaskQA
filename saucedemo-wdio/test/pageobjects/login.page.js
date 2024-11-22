import {browser, $} from '@wdio/globals'

class LoginPage{
    //Element Locators
    get usernameInput() {return $('#user-name')}
    get passwordInput() {return $('#password')}

    get loginButton() {return $('#login-button')}

    get errorMassage() {return $('h3[data-test="error"]')}

    //PageActions

    async loginProcess(username, password){
        await this.usernameInput.setValue(username)
        await this.passwordInput.setValue(password)
        await this.loginButton.click()
    }

    async openPage(){
        await browser.url('https://www.saucedemo.com/')
        await browser.maximizeWindow()
        await browser.pause(2000)
    }
}

export default new LoginPage()