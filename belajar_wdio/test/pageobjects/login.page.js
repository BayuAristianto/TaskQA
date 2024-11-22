import {browser, $} from '@wdio/globals'

class LoginPage{
    //Element Locators
    get usernameInput() {return $('#user-name')}
    get passwordInput() {return $('#password')}
    get submitButton() {return $('#login-button')}
    get errorMassage() {return $('h3[data-test="error"]')}

    //Page Actions
    async loginProcess(username, password){
        await this.usernameInput.setValue(username)
        await this.passwordInput.setValue(password)
        await this.submitButton.click()
    }

    async openPage(){
        await browser.url('https://www.saucedemo.com/')

    }
}

export default new LoginPage()