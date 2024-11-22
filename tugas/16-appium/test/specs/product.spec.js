import {driver, $, expect} from '@wdio/globals'
import productPage from '../pageobjects/product.page.js'


describe('PRODUCT FEATURE', function(){

    it('Rating One Stars', async function(){
        await productPage.ratingOneStars()
        await expect(productPage.checkBlockMsgReview).toExist()
        await expect(productPage.checkMsgReview).toHaveText('Thank you for submitting your review!')
        await productPage.popupMsgSuccessConfirm()
        await driver.pause(2000)
    })

    it('Rating Five Stars', async function(){
        await productPage.ratingFiveStars()
        await expect(productPage.checkBlockMsgReview).toExist()
        await expect(productPage.checkMsgReview).toHaveText('Thank you for submitting your review!')
        await productPage.popupMsgSuccessConfirm()
        await driver.pause(2000)
    })

    it('Pilih Warna Hijau', async function(){
        await productPage.greenColorSelect()
        await expect(productPage.checkRoundColor).toHaveAttr('content-desc', 'Indicates when color is selected')
    })

    it('Select All Option Needed With Qty 1', async function(){
        await productPage.ratingFiveStars()
        await expect(productPage.checkBlockMsgReview).toExist()
        await expect(productPage.checkMsgReview).toHaveText('Thank you for submitting your review!')
        await productPage.popupMsgSuccessConfirm()

        await productPage.selectAll()
        const getProductND = await productPage.getProductNameDisplay()
        await productPage.checkCart()
        const getProductNC = await productPage.getProductNameCart()
        await expect(productPage.checkProductNameCart).toHaveText('Sauce Labs Backpack')
        await expect(getProductNC).toEqual(getProductND)
        await expect(productPage.checkColorSelected).toHaveAttribute('content-desc', 'Displays color of selected product')
        await expect (productPage.totalPriceText()).toEqual(productPage.priceText())
        await driver.pause(2000)
    })

    it('Select All Option Needed With Qty 2 Using Increase Button', async function(){
        await productPage.ratingFiveStars()
        await expect(productPage.checkBlockMsgReview).toExist()
        await expect(productPage.checkMsgReview).toHaveText('Thank you for submitting your review!')
        await productPage.popupMsgSuccessConfirm()

        await productPage.selectAllIncrease()
        const getProductND = await productPage.getProductNameDisplay()
        await expect(productPage.checkProductName).toHaveText('Sauce Labs Backpack')
        await expect(productPage.checkRoundColor).toExist()

        await productPage.checkCart()
        const getProductNC = await productPage.getProductNameCart()
        await expect(productPage.checkTitleCart).toHaveText('My Cart')
        await expect(getProductNC).toEqual(getProductND)
        await expect(productPage.checkColorSelected).toHaveAttribute('content-desc', 'Displays color of selected product')
        await expect(productPage.totalPriceText()).toEqual(productPage.priceText())
        await driver.pause(2000)
    })


    it.only('Select All Option Needed With Qty 0 Using Decrease Button', async function(){
        await productPage.ratingFiveStars()
        await expect(productPage.checkBlockMsgReview).toExist()
        await expect(productPage.checkMsgReview).toHaveText('Thank you for submitting your review!')
        await productPage.popupMsgSuccessConfirm()

        await productPage.selectAllDecrease()
        await expect(productPage.checkQty).toHaveText('0')
        await expect(productPage.buttonAddCart).toBeDisabled()

        await productPage.checkCartNoItem()
        await expect(productPage.checkNoItemTitle).toHaveText('No Items')
        await expect(productPage.checkGoShoppingButton).toExist()
        await driver.pause(2000)
    })

    

})