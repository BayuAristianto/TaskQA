import {browser, $, expect} from '@wdio/globals'
import loginPage from '../pageobjects/login.page.js'
import inventoryPage from '../pageobjects/inventory.page.js'

describe('Fitur Login', function(){
    it('Login Dengan Username dan Password Yang Benar', async function(){

        await loginPage.openPage()
        await loginPage.loginProcess('standard_user','secret_sauce')

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await expect(inventoryPage.pageTitle).toHaveText('Products')
    })

    it('Login Dengan Username Yang Benar dan Password Yang Salah', async function(){
        await loginPage.openPage()
        await loginPage.loginProcess('standard_user', 'salahin')

        await expect (loginPage.errorMassage).toHaveText(
            expect.stringContaining('Username and password do not match')
        )
    })
})