import loginPage from '../pageobjects/login.page.js'
import {expect, browser} from '@wdio/globals'
import {checkIsDesc } from '../../helpers/checksorting.js'
import inventoryPage from '../pageobjects/inventory.page.js'


describe('Fitur Inventory', function(){

    before('User Login', async function(){
        await loginPage.openPage()
        await loginPage.loginProcess('standard_user','secret_sauce')
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })

    it('Urutkan Produk Berdasarkan Nama Descanding', async function(){
        await inventoryPage.openPage()        

        await inventoryPage.orderProductByNameDesc()

        const allProductName = inventoryPage.getAllProductName()

        const isProductSortedDesc = checkIsDesc(allProductName)
        await expect(isProductSortedDesc).toBe(true)

        await browser.pause(5000)
    })
})