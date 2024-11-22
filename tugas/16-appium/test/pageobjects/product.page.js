import {$} from '@wdio/globals'

class ProductPage {
    //OPEN
    get pictureOpen() {return $('id=com.saucelabs.mydemoapp.android:id/productIV')} 
    //RAITING STARS
    get starsOne() {return $('id=com.saucelabs.mydemoapp.android:id/start1IV')} 
    get starsFive() {return $('id=com.saucelabs.mydemoapp.android:id/start5IV')} 
    //CONFIRMATION
    get starsConfirm() {return $('id=com.saucelabs.mydemoapp.android:id/closeBt')} 
    //CHOOSE COLOR
    get blackColor() {return $('~Black color')} 
    get blueColor() {return $('~Blue color')} 
    get grayColor() {return $('~Gray color')} 
    get greenColor() {return $('~Green color')} 
    //INCREASE DECREASE
    get decreaseItem() {return $('~Decrease item quantity')} 
    get increaseItem() {return $('~Increase item quantity')} 
    //BUTTON
    get buttonAddCart() {return $('id=com.saucelabs.mydemoapp.android:id/cartBt')}
    get buttonCart() {return $('id=com.saucelabs.mydemoapp.android:id/cartIV')}
    //CHECK
    get checkProductName() {return $('id=com.saucelabs.mydemoapp.android:id/productTV')}
    get checkBlockMsgReview() {return $('//android.view.ViewGroup')}
    get checkMsgReview() {return $('id=com.saucelabs.mydemoapp.android:id/sortTV')}
    get checkQty() {return $('id=com.saucelabs.mydemoapp.android:id/noTV')}
    get checkTitleCart() {return $('id=com.saucelabs.mydemoapp.android:id/productTV')}
    get checkProductNameCart() {return $('id=com.saucelabs.mydemoapp.android:id/titleTV')}
    get checkSinglePrice() {return $('id=com.saucelabs.mydemoapp.android:id/priceTV')}
    get checkTotalPrice() {return $('id=com.saucelabs.mydemoapp.android:id/totalPriceTV')} 
    get checkRoundColor() {return $('id=com.saucelabs.mydemoapp.android:id/aroundIV')}
    get checkColorSelected() {return $('id=com.saucelabs.mydemoapp.android:id/colorIV')}
    get checkNoItemTitle() {return $('id=com.saucelabs.mydemoapp.android:id/noItemTitleTV')}
    get checkGoShoppingButton() {return $('id=com.saucelabs.mydemoapp.android:id/shoppingBt')}

    //===================================================================
    //Stars
    async openProduct(){
        await this.pictureOpen.click()
    }

    async ratingOneStars(){
        await this.pictureOpen.click()
        await this.starsOne.click()
    }

    async ratingFiveStars(){
        await this.pictureOpen.click()
        await this.starsFive.click()
    }

    async popupMsgSuccessConfirm(){
        await driver.pause(2000)
        await this.starsConfirm.click()
    }

    async greenColorSelect(){
        await this.pictureOpen.click()
        await this.greenColor.click()
    }
    
    async selectAllIncrease(){
        await this.blueColor.click()
        await this.increaseItem.click()
        await this.buttonAddCart.click()
        await driver.pause(2000)
    }
    async selectAllDecrease(){
        await this.grayColor.click()
        await this.decreaseItem.click()
        await this.buttonAddCart.click()
        await driver.pause(2000)
    }
    async selectAll(){
        await this.greenColor.click()
        await this.buttonAddCart.click()
        await driver.pause(2000)
    }
    async checkCart(){
        await this.buttonCart.click()
        await this.checkTitleCart.getText()
        await this.checkQty.getText()
        await driver.pause(2000)

    }
    async checkCartNoItem(){
        await this.buttonCart.click()
        await driver.pause(2000)
    }

    async priceText(){
        const getPrice = await this.checkSinglePrice.getText()
        const getQty = await this.checkQty.getText()
        
        const getSliceP = await getPrice.slice(2)
        const parseP = parseFloat(getSliceP)
        const parseQTY = parseInt(getQty)
        const hasil = parseP * parseQTY
        const stringHasil = hasil.toString()
        return stringHasil
    }
    async totalPriceText(){
        const getTotalPrice = await this.checkTotalPrice.getText()
        const getSliceTP = await getTotalPrice.slice(2)
        return getSliceTP
    }

    async getProductNameCart(){
        const getProductNC = await this.checkProductNameCart.getText()
        return getProductNC
    }

    async getProductNameDisplay(){
        const getProductND = await this.checkProductName.getText()
        return getProductND
    }

}

export default new ProductPage()