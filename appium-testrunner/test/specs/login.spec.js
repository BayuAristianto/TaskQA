import {driver, $, expect} from '@wdio/globals'
import loginPage from '../pageobjects/login.page.js'
import productPage from '../pageobjects/product.page'

describe('LOGIN FITUR', function(){
    beforeEach(async function(){
        await loginPage.menuButton.click()
        await loginPage.loginMenu.click()

        await expect(loginPage.loginPageTitle).toHaveText('Login')
    })

    it('Login with empty password', async function(){

        await loginPage.loginProcess('bod@example.com','')
        await expect(loginPage.passwordErrorMsg).toHaveText('Enter Password')
    
    })

    it('Login with empty username', async function(){

        await loginPage.loginProcess('','10203040')
        await expect(loginPage.usernameErrorMsg).toHaveText('Username is required')

    })

    it('Login with valid username and password', async function(){
        //LOGIN
        await loginPage.loginProcess('bod@example.com','10203040')
        await expect(productPage.productPageTitle).toHaveText('Products')

        //LOGOUT
        await productPage.logoutProcess()
        await expect(loginPage.loginPageTitle).toHaveText('Login')
    })

    after(async function(){
        await driver.pause(3000)
    })
})