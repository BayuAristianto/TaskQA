import loginPage from '../pageobjects/login.page.js'
import {expect, browser} from '@wdio/globals'
import { checkIsAsc } from '../../../belajar_wdio/helpers/checksorting.js'
import { checkIsDesc } from '../../../belajar_wdio/helpers/checksorting.js'
import inventoryPage from '../pageobjects/inventory.page.js'

describe('Fitur Inventory', function(){
    
    before('User Login', async function(){
        await loginPage.openPage()
        await loginPage.loginProcess('standard_user','secret_sauce')
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })

    it('Urutkan Produk Berdasarkan Nama Ascanding', async function(){
        await inventoryPage.orderProductByNameAsc()

        const allProductNameAsc = await inventoryPage.getAllProductName()
        const isProductSortedAsc = checkIsAsc(allProductNameAsc)
        await expect (isProductSortedAsc).toBe(true)
        await browser.pause(2000)

        await inventoryPage.shoppingCartBtn()
        await inventoryPage.continueShoppingBtn()
        await browser.pause(2000)

    })

    it('Urutkan Produk Berdasarkan Nama Descanding', async function(){
        await inventoryPage.orderProductByNameDesc()

        const allProductNameDesc = await inventoryPage.getAllProductName()
        const isProductSortedDesc = checkIsDesc(allProductNameDesc)
        await expect(isProductSortedDesc).toBe(true)
        await browser.pause(2000)
    })

    it('Urutkan Produk Berdasarkan Price Low to High', async function(){
        await inventoryPage.orderProductByPriceLoHi()

        const allProductPricesLoHi = await inventoryPage.getAllProductPrice()
        const isProductSortedLohi = checkIsAsc(allProductPricesLoHi)
        await expect(isProductSortedLohi).toBe(true)
        await browser.pause(2000)
    })

    it('Urutkan Produk Berdasarkan Price High to Low', async function(){
        await inventoryPage.orderProductByPriceHiLo()

        const allProductPricesLoHi = await inventoryPage.getAllProductPrice()
        const isProductSortedLohi = checkIsDesc(allProductPricesLoHi)
        await expect(isProductSortedLohi).toBe(true)
        await browser.pause(2000)
    })

    it.only('Check All Product', async function(){
        await inventoryPage.checkProductSLB()
        await expect(inventoryPage.productNameCheck).toHaveText('Sauce Labs Backpack')
        await expect(inventoryPage.productPriceCheck).toHaveText('$29.99')
        await inventoryPage.backToProduct()
        await browser.pause(1000)
        
        await inventoryPage.checkProductSLBL()
        await expect(inventoryPage.productNameCheck).toHaveText('Sauce Labs Bike Light')
        await expect(inventoryPage.productPriceCheck).toHaveText('$9.99')
        await inventoryPage.backToProduct()
        await browser.pause(1000)

        await inventoryPage.checkProductSLBTS()
        await expect(inventoryPage.productNameCheck).toHaveText('Sauce Labs Bolt T-Shirt')
        await expect(inventoryPage.productPriceCheck).toHaveText('$15.99')
        await inventoryPage.backToProduct()
        await browser.pause(1000)

        await inventoryPage.checkProductSLFJ()
        await expect(inventoryPage.productNameCheck).toHaveText('Sauce Labs Fleece Jacket')
        await expect(inventoryPage.productPriceCheck).toHaveText('$49.99')
        await inventoryPage.backToProduct()
        await browser.pause(1000)

        await inventoryPage.checkProductSLO()
        await expect(inventoryPage.productNameCheck).toHaveText('Sauce Labs Onesie')
        await expect(inventoryPage.productPriceCheck).toHaveText('$7.99')
        await inventoryPage.backToProduct()
        await browser.pause(1000)

        await inventoryPage.checkProductSLTR()
        await expect(inventoryPage.productNameCheck).toHaveText('Test.allTheThings() T-Shirt (Red)')
        await expect(inventoryPage.productPriceCheck).toHaveText('$15.99')
        await inventoryPage.backToProduct()

        await browser.pause(2000)
    })
    
})