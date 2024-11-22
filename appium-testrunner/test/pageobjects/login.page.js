import { $ } from '@wdio/globals'
import Page from "./page.js";

class LoginPage extends Page {
    get usernameInput() {return $('id=com.saucelabs.mydemoapp.android:id/nameET')}
    get loginPageTitle() {return $('id=com.saucelabs.mydemoapp.android:id/loginTV')}
    get loginButton() {return $('id=com.saucelabs.mydemoapp.android:id/loginBtn')}
    get passwordErrorMsg() {return $('id=com.saucelabs.mydemoapp.android:id/passwordErrorTV')}
    get passwordInput() {return $('id=com.saucelabs.mydemoapp.android:id/passwordET')}
    get usernameErrorMsg() {return $('id=com.saucelabs.mydemoapp.android:id/nameErrorTV')}



    async loginProcess(username, password){
        await this.usernameInput.setValue(username)
        await this.passwordInput.setValue(password)
        await this.loginButton.click()
    }
}

export default new LoginPage()