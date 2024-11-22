import {expect, browser} from '@wdio/globals'
import loginPage from '../pageobjects/login.page.js'
import inventoryPage from '../pageobjects/inventory.page.js'
import problemPage from '../pageobjects/problem.page.js'

describe('Problem User Account', function (){
    before('User Login with Problem User Account', async function(){
        await loginPage.openPage()
        await loginPage.loginProcess('problem_user','secret_sauce')
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await expect(problemPage.imgSLB).not.toHaveAttribute('src', '/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg')
        await expect(problemPage.imgSLBL).not.toHaveAttribute('src', '/static/media/bike-light-1200x1500.37c843b0.jpg')
        await expect(problemPage.imgSLBTS).not.toHaveAttribute('src', '/static/media/bolt-shirt-1200x1500.c2599ac5.jpg')
        await expect(problemPage.imgSLFJ).not.toHaveAttribute('src', '/static/media/sauce-pullover-1200x1500.51d7ffaf.jpg')
        await expect(problemPage.imgSLO).not.toHaveAttribute('src', '/static/media/red-onesie-1200x1500.2ec615b2.jpg')
        await expect(problemPage.imgSLTR).not.toHaveAttribute('src', '/static/media/red-tatt-1200x1500.30dadef4.jpg')

    })

    it('Check URL Product Not Matches', async function(){
        await inventoryPage.checkProductSLB()
        await expect(browser).not.toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4')
        await inventoryPage.backToProduct()
        await browser.pause(1000)

        await inventoryPage.checkProductSLBL()
        await expect(browser).not.toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=0')
        await inventoryPage.backToProduct()
        await browser.pause(1000)

        await inventoryPage.checkProductSLBTS()
        await expect(browser).not.toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=1')
        await inventoryPage.backToProduct()
        await browser.pause(1000)

        await inventoryPage.checkProductSLFJ()
        await expect(browser).not.toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=5')
        await inventoryPage.backToProduct()
        await browser.pause(1000)

        await inventoryPage.checkProductSLO()
        await expect(browser).not.toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=2')
        await inventoryPage.backToProduct()
        await browser.pause(1000)

        await inventoryPage.checkProductSLTR()
        await expect(browser).not.toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=3')
        await inventoryPage.backToProduct()
        await browser.pause(1000)

    })
})