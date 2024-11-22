import loginPage from "../pageobjects/login.page.js";
import burgerPage from "../pageobjects/burger.page.js";
import cartPage from "../pageobjects/cart.page.js";
import {expect, browser} from '@wdio/globals'
import inventoryPage from "../pageobjects/inventory.page.js";

describe('Fitur Burger Menu', function(){
    before('User Login', async function(){
        await loginPage.openPage()
        await loginPage.loginProcess('standard_user','secret_sauce')
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })

    it.only('All Item Menu', async function(){
        await cartPage.addProductSLBTS()
        await cartPage.shoppingCartBtn()
        await expect(cartPage.productSLBTS).toHaveText('Sauce Labs Bolt T-Shirt')

        await burgerPage.burgerListMenu()
        await expect(burgerPage.listMenu).toExist()
        await burgerPage.allItemMenu()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await expect(inventoryPage.pageTitle).toHaveText('Products')

    })
    it('About Menu', async function(){
        await burgerPage.burgerListMenu()
        await expect(burgerPage.listMenu).toExist()
        await burgerPage.aboutMenu()
        await expect(browser).toHaveUrl('https://saucelabs.com/')
        await browser.pause(2000)
    })
    it('Logout Menu', async function(){
        await burgerPage.burgerListMenu()
        await expect(burgerPage.listMenu).toExist()
        await burgerPage.logoutMenu()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/')
        await expect(burgerPage.loginTitle).toHaveText('Swag Labs')  
    })

    it('Reset App State', async function(){
        await cartPage.addProductSLB()
        await cartPage.addProductSLTR()
        await expect(cartPage.countItem).toHaveText('2')
        
        await burgerPage.burgerListMenu()
        await expect(burgerPage.listMenu).toExist()
        await burgerPage.resetAppState()
        await expect(cartPage.countItem).not.toExist()
    })
})