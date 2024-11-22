import loginPage from "../pageobjects/login.page.js";
import cartPage from "../pageobjects/cart.page.js";
import checkoutPage from "../pageobjects/checkout.page.js";
import {expect, browser} from '@wdio/globals'

describe('Fitur Checkout', function(){
    before('User Login', async function(){
        await loginPage.openPage()
        await loginPage.loginProcess('standard_user','secret_sauce')
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })

    it('Add One Item to Cart Until Checkout', async function(){
        await cartPage.addProductSLB()
        await cartPage.shoppingCartBtn()
        await expect(cartPage.titleS).toHaveText('Your Cart')
        await expect(cartPage.countItem).toHaveText('1')
        await expect(cartPage.productSLB).toHaveText('Sauce Labs Backpack')
        
        await cartPage.continueShoppingBtn()
        await expect(cartPage.titleS).toHaveText('Products')
        await cartPage.addProductSLBTS()
        
        await cartPage.shoppingCartBtn()
        await expect(cartPage.titleS).toHaveText('Your Cart')
        await expect(cartPage.countItem).toHaveText('2')
        await expect(cartPage.productSLB).toHaveText('Sauce Labs Backpack')
        await expect(cartPage.productSLBTS).toHaveText('Sauce Labs Bolt T-Shirt')
        
        await cartPage.checkoutButton()
        await expect(checkoutPage.titleS).toHaveText('Checkout: Your Information')
        
        await checkoutPage.cancelCheckout()
        await expect(checkoutPage.titleS).toHaveText('Your Cart')

        await cartPage.checkoutButton()
        await expect(checkoutPage.titleS).toHaveText('Checkout: Your Information')
        await checkoutPage.inputCheckoutData('bayu', 'aris', '123456')
        await checkoutPage.continueCheckout()
        await expect(checkoutPage.titleS).toHaveText('Checkout: Overview')
        await expect(checkoutPage.paymentInformation).toExist()
        await expect(checkoutPage.paymentValue).toExist()
        await expect(checkoutPage.shippingInformation).toExist()
        await expect(checkoutPage.shippingValue).toExist()
        await expect(checkoutPage.priceTotal).toExist()
        await expect(checkoutPage.subTotal).toExist()
        await expect(checkoutPage.taxItem).toExist()
        await expect(checkoutPage.totalItemPrice).toExist()

        await checkoutPage.finishCheckout()
        await expect(checkoutPage.titleS).toHaveText('Checkout: Complete!')
        await expect(checkoutPage.iconSuccess).toExist()
        await expect(checkoutPage.completeTitle).toHaveText('Thank you for your order!')

        await checkoutPage.backHome()
        await expect(cartPage.titleS).toHaveText('Products')
    })
})