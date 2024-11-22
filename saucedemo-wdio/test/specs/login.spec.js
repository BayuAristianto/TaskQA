import {browser, $, expect} from '@wdio/globals'
import loginPage from '../pageobjects/login.page.js'

describe('Fitur Login', function(){
    it('Login Dengan Username dan Password Yang Benar', async function(){
        await loginPage.openPage()
        await loginPage.loginProcess('standard_user', 'secret_sauce')

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        
    })

    it('Login Dengan Username Yang Benar dan Password Yang Salah', async function(){
        await loginPage.openPage()
        await loginPage.loginProcess('standard_user','pwsalah')

        await expect (loginPage.errorMassage).toHaveText(
            expect.stringContaining('Username and password do not match')
        )
    })

    it('Login Dengan Username Yang Salah dan Password Yang Benar', async function(){
        await loginPage.openPage()
        await loginPage.loginProcess('wronguser','secret_sauce')

        await expect (loginPage.errorMassage).toHaveText(
            expect.stringContaining('Username and password do not match')
        )
    })

    it('Login Dengan Username Yang Benar dan Password Kosong', async function(){
        await loginPage.openPage()
        await loginPage.loginProcess('standard_user','')

        await expect (loginPage.errorMassage).toHaveText(
            expect.stringContaining('Password is required')
        )
    })

    it('Login Dengan Username Kosong dan Password Yang Benar', async function(){
        await loginPage.openPage()
        await loginPage.loginProcess('','secret_sauce')

        await expect (loginPage.errorMassage).toHaveText(
            expect.stringContaining('Username is required')
        )
    })

    it('Login Dengan Username dan Password Kosong', async function(){
        await loginPage.openPage()
        await loginPage.loginProcess('','')

        await expect (loginPage.errorMassage).toHaveText(
            expect.stringContaining('Username is required')
        )
    })

    it.only('Login Dengan Username Locked Out dan Password Yang Benar', async function(){
        await loginPage.openPage()
        await loginPage.loginProcess('locked_out_user','secret_sauce')

        await expect (loginPage.errorMassage).toHaveText(
            expect.stringContaining('Sorry, this user has been locked out.')
        )
    })
})