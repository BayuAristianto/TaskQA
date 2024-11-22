import {browser, $} from '@wdio/globals'

class CheckoutPage {
    //Element Locators
    get buttonContinue() {return $('#continue')}
    get buttonCancel() {return $('#cancel')}
    get buttonFinish() {return $('#finish')}
    get buttonBackHome() {return $('#back-to-products')}

    get inputFirstName() {return $('#first-name')}
    get inputLastName() {return $('#last-name')}
    get inputPostalCode() {return $('#postal-code')}

    get titleS() {return $('span[data-test="title"]')}

    get paymentInformation() {return $('div[data-test="payment-info-label"]')}
    get paymentValue() {return $('div[data-test="payment-info-value"]')}
    get shippingInformation() {return $('div[data-test="shipping-info-label"]')}
    get shippingValue() {return $('div[data-test="shipping-info-value"]')}
    get priceTotal() {return $('div[data-test="total-info-label"]')}
    get subTotal() {return $('div[data-test="subtotal-label"]')}
    get taxItem() {return $('div[data-test="tax-label"]')}
    get totalItemPrice() {return $('div[data-test="total-label"]')}

    get iconSuccess() {return $('img[data-test="pony-express"]')}
    get completeTitle() {return $('h2[data-test="complete-header"]')}

    //Page Actions
    async openPage(){
        await browser.url('https://www.saucedemo.com/inventory.html')
    }

    async continueCheckout(){
        await this.buttonContinue.click()
    }

    async cancelCheckout(){
        await this.buttonCancel.click()
    }

    async finishCheckout(){
        await this.buttonFinish.click()
    }

    async backHome(){
        await this.buttonBackHome.click()
    }
    async inputCheckoutData(firstname, lastname, postalcode){
        await this.inputFirstName.setValue(firstname)
        await this.inputLastName.setValue(lastname)
        await this.inputPostalCode.setValue(postalcode)
    }

}

export default new CheckoutPage()