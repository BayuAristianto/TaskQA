import loginPage from '../pageobjects/login.page.js'
import {expect, browser} from '@wdio/globals'
import cartPage from '../pageobjects/cart.page.js'

describe('Fitur Cart', function(){
    before('User Login', async function(){
        await loginPage.openPage()
        await loginPage.loginProcess('standard_user','secret_sauce')
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })

    it.skip('Add One Item to Cart', async function(){
        await cartPage.addProductSLB()
        await cartPage.shoppingCartBtn()
        await expect(cartPage.productSLB).toHaveText('Sauce Labs Backpack')
    })

    it.skip('Add All Item to Cart', async function(){
        await cartPage.addAllProduct()
        await cartPage.shoppingCartBtn()
        await expect(cartPage.titleS).toHaveText('Your Cart')
        await expect(cartPage.productSLB).toHaveText('Sauce Labs Backpack')
        await expect(cartPage.productSLBL).toHaveText('Sauce Labs Bike Light')
        await expect(cartPage.productSLBTS).toHaveText('Sauce Labs Bolt T-Shirt')
        await expect(cartPage.productSLFJ).toHaveText('Sauce Labs Fleece Jacket')
        await expect(cartPage.productSLO).toHaveText('Sauce Labs Onesie')
        await expect(cartPage.productSLTR).toHaveText('Test.allTheThings() T-Shirt (Red)')
        await expect(cartPage.countItem).toHaveText('6')
    })

    it.skip('Delete All Item in Cart', async function(){
        await cartPage.addAllProduct()
        await cartPage.shoppingCartBtn()
        await expect(cartPage.titleS).toHaveText('Your Cart')
        await expect(cartPage.productSLB).toHaveText('Sauce Labs Backpack')
        await expect(cartPage.productSLBL).toHaveText('Sauce Labs Bike Light')
        await expect(cartPage.productSLBTS).toHaveText('Sauce Labs Bolt T-Shirt')
        await expect(cartPage.productSLFJ).toHaveText('Sauce Labs Fleece Jacket')
        await expect(cartPage.productSLO).toHaveText('Sauce Labs Onesie')
        await expect(cartPage.productSLTR).toHaveText('Test.allTheThings() T-Shirt (Red)')
        await expect(cartPage.countItem).toHaveText('6')
        
        await browser.pause(2000)
        await cartPage.removeAllItem()
        await expect(cartPage.productSLB).not.toExist()
        await expect(cartPage.productSLBL).not.toExist()
        await expect(cartPage.productSLBTS).not.toExist()
        await expect(cartPage.productSLFJ).not.toExist()
        await expect(cartPage.productSLO).not.toExist()
        await expect(cartPage.productSLTR).not.toExist()
        
    })

    it('Add Two Item to Cart and Remove One Product', async function(){
        await cartPage.addProductSLB()
        await cartPage.shoppingCartBtn()
        await expect(cartPage.titleS).toHaveText('Your Cart')
        await expect(cartPage.productSLB).toHaveText('Sauce Labs Backpack')
        await expect(cartPage.countItem).toHaveText('1')

        await cartPage.continueShoppingBtn()
        await cartPage.addProductSLO()
        await expect(cartPage.titleS).toHaveText('Products')

        await cartPage.shoppingCartBtn()
        await expect(cartPage.titleS).toHaveText('Your Cart')
        await expect(cartPage.productSLB).toHaveText('Sauce Labs Backpack')
        await expect(cartPage.productSLO).toHaveText('Sauce Labs Onesie')
        await expect(cartPage.countItem).toHaveText('2')

        await cartPage.removeSLB()
        await expect(cartPage.productSLB).not.toExist()
        await expect(cartPage.countItem).toHaveText('1')
    })

})