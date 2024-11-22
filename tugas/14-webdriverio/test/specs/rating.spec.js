import {browser, $, expect} from '@wdio/globals'
import ratingPage from '../pageobjects/rating.page.js'
import quantityPage from '../pageobjects/quantity.page.js'

describe('Fitur Rating', function(){
    
    it('Rating Dengan Mengisi Semua Value Bintang 1', async function(){
        await ratingPage.openPage()
        await ratingPage.clickReview()
        await ratingPage.chooseStars(1)
        await browser.pause(2000)
        await ratingPage.dataReview(
            'testing',
            'fushion backpack grey',
            'barangnya bagus'
        )

        await expect(browser).toHaveUrl('https://magento.softwaretestingboard.com/fusion-backpack.html')
        await expect(ratingPage.successSubmit).toExist()
        await expect(ratingPage.successSubmit).toHaveText('You submitted your review for moderation.')
        await browser.pause(2000)
    })

    it('Rating Dengan Mengisi Semua Value Bintang 5', async function(){
        await ratingPage.openPage()
        await ratingPage.clickReview()
        await ratingPage.chooseStars(5)
        await browser.pause(2000)
        await ratingPage.dataReview(
            'testing',
            'fushion backpack grey',
            'barangnya bagus'
        )

        await expect(browser).toHaveUrl('https://magento.softwaretestingboard.com/fusion-backpack.html')
        await expect(ratingPage.successSubmit).toExist()
        await expect(ratingPage.successSubmit).toHaveText('You submitted your review for moderation.')
        await browser.pause(2000)
    })

    it('Rating Dengan Value Kosong', async function(){
        await ratingPage.openPage()
        await ratingPage.clickReview()
        await ratingPage.dataReview('', '', '')
        await browser.pause(2000)
        await expect(browser).toHaveUrl('https://magento.softwaretestingboard.com/fusion-backpack.html')
        await expect(ratingPage.requiredStarMassage).toExist()
        await expect(ratingPage.requiredNicknameMassage).toExist()
        await expect(ratingPage.requiredSummaryMassage).toExist()
        await expect(ratingPage.requiredReviewMassage).toExist()
       
        await expect(ratingPage.requiredStarMassage).toHaveText('Please select one of each of the ratings above.')
        await expect(ratingPage.requiredNicknameMassage).toHaveText('This is a required field.')
        await expect(ratingPage.requiredSummaryMassage).toHaveText('This is a required field.')
        await expect(ratingPage.requiredReviewMassage).toHaveText('This is a required field.')
    })
    it('Rating Dengan Mengisi Semua Value Kecuali Nickname', async function(){
        await ratingPage.openPage()
        await ratingPage.clickReview()
        await ratingPage.chooseStars(5)
        await browser.pause(2000)
        await ratingPage.dataReview(
            '',
            'fushion backpack grey',
            'barangnya bagus'
        )

        await expect(browser).toHaveUrl('https://magento.softwaretestingboard.com/fusion-backpack.html')
        await expect(ratingPage.requiredNicknameMassage).toHaveText('This is a required field.')
        await browser.pause(2000)
    })

    it('Rating Dengan Mengisi Semua Value Kecuali Summary', async function(){
        await ratingPage.openPage()
        await ratingPage.clickReview()
        await ratingPage.chooseStars(5)
        await browser.pause(2000)
        await ratingPage.dataReview(
            'testing',
            '',
            'barangnya bagus'
        )

        await expect(browser).toHaveUrl('https://magento.softwaretestingboard.com/fusion-backpack.html')
        await expect(ratingPage.requiredSummaryMassage).toHaveText('This is a required field.')
        await browser.pause(2000)
    })

    it('Rating Dengan Mengisi Semua Value Kecuali Review', async function(){
        await ratingPage.openPage()
        await browser.pause(2000)
        await ratingPage.clickReview()
        await ratingPage.chooseStars(5)
        await browser.pause(2000)
        await ratingPage.dataReview(
            'testing',
            'fushion backpack grey',
            ''
        )

        await expect(browser).toHaveUrl('https://magento.softwaretestingboard.com/fusion-backpack.html')
        await expect(ratingPage.requiredReviewMassage).toHaveText('This is a required field.')
        await browser.pause(2000)
    })

    it('Check Tab Reviews', async function(){
        await ratingPage.openPage()
        await browser.pause(2000)
        await ratingPage.clickTabReview()
        // await ratingPage.clickCountReview()
        
        await expect(browser).toHaveUrl('https://magento.softwaretestingboard.com/fusion-backpack.html')
        
        await expect(ratingPage.blockReview).toExist()
        await expect(ratingPage.blockRating).toExist()
        await expect(ratingPage.blockReviewContent).toExist()
        await expect(ratingPage.blockDateReview).toExist()

        await expect(ratingPage.textTitle).toHaveText('Customer Reviews')
        await expect(ratingPage.textReviewTitle).toHaveText("I've had this thing for really long")
        await browser.pause(2000)
    })

    it('Check Count Reviews Link', async function(){
        await ratingPage.openPage()
        await browser.pause(2000)
        await ratingPage.clickCountReview()
        
        await expect(browser).toHaveUrl('https://magento.softwaretestingboard.com/fusion-backpack.html')
        
        await expect(ratingPage.blockReview).toExist()
        await expect(ratingPage.blockRating).toExist()
        await expect(ratingPage.blockReviewContent).toExist()
        await expect(ratingPage.blockDateReview).toExist()

        await expect(ratingPage.textTitle).toHaveText('Customer Reviews')
        await expect(ratingPage.textReviewTitle).toHaveText("I've had this thing for really long")
        await browser.pause(2000)
    })


    
})

describe('Fitur Add to Cart', function(){
    it('Add to Cart with QTY 1', async function(){
        //OpenPage
        await browser.url('https://magento.softwaretestingboard.com/fusion-backpack.html')
        const inputQty = "1"
        await quantityPage.addItemQty(inputQty)
        await expect(quantityPage.addMsgSuccess).toHaveText('You added Fusion Backpack to your shopping cart.')
        //IconCart
        await quantityPage.checkCartItem()
        await expect(quantityPage.miniCart).toBeExisting()
        await expect(quantityPage.productNameCart).toHaveText('Fusion Backpack')
        const getQtyCartValue = await quantityPage.getQtyCartValue()
        await expect(inputQty).toEqual(getQtyCartValue)
        await browser.pause(2000)
        //Link Shopping Cart
        await quantityPage.checkShoppingCart()
        await expect(quantityPage.titleShoppingCart).toHaveText('Shopping Cart')
        await expect(quantityPage.productNameSC).toHaveText('Fusion Backpack')
        const getQtySCValue = await quantityPage.getQtySCValue()
        await expect(inputQty).toEqual(getQtySCValue)
        await browser.pause(2000)
    })

    it('Add to Cart with QTY 0', async function(){
        await browser.url('https://magento.softwaretestingboard.com/fusion-backpack.html')
        const inputQty = "0"
        await quantityPage.addItemQty(inputQty)
        await expect(quantityPage.errorMsgInput).toHaveText('Please enter a quantity greater than 0.')

    })

    it('Add to Cart with QTY -1', async function(){
        await browser.url('https://magento.softwaretestingboard.com/fusion-backpack.html')
        const inputQty = "-1"
        await quantityPage.addItemQty(inputQty)
        await expect(quantityPage.errorMsgInput).toHaveText('Please enter a quantity greater than 0.')

    })

    it('Add to Cart with QTY 9999', async function(){
        await browser.url('https://magento.softwaretestingboard.com/fusion-backpack.html')
        const inputQty = "9999"
        await quantityPage.addItemQty(inputQty)
        await expect(quantityPage.errorAlertMsg).toHaveText('The requested qty is not available')

    })

    it('Add to Cart with QTY 10000', async function(){
        await browser.url('https://magento.softwaretestingboard.com/fusion-backpack.html')
        const inputQty = "10000"
        await quantityPage.addItemQty(inputQty)
        await expect(quantityPage.errorAlertMsg).toHaveText('The requested qty is not available')

    })

})