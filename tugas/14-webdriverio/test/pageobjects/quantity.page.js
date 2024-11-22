import {browser, $} from '@wdio/globals'

class QuantityPage{
    //Element Locators
    //===AddToCart===
    get btnAdd() {return $('#product-addtocart-button')}
    get qtyInput() {return $('#qty')} 
    get cartButton() {return $('a[class="action showcart"]')}
    get clickShoppingCart() {return $('a=shopping cart')}


    //ATCExpect
    get addMsgSuccess() {return $('div[data-bind="html: $parent.prepareMessageForHtml(message.text)"]')}

    get miniCart() {return $('div[class="block block-minicart ui-dialog-content ui-widget-content"]')}
    get productNameCart() {return $('a[data-bind="attr: {href: product_url}, html: product_name"]')}
    get productQtyCart() {return $('input[class="item-qty cart-item-qty"]')}

    get titleShoppingCart() {return $('h1[class="page-title"]')}
    get productNameSC() {return $('=Fusion Backpack')}
    get productQtySC() {return $('input[class="input-text qty"]')}
    //ErrorMessage
    get errorMsgInput() {return $('#qty-error')}
    get errorAlertMsg() {return $('div[data-bind="html: $parent.prepareMessageForHtml(message.text)"]')}




    //Page Actions
    async addItemQty(setQty){
        await this.qtyInput.setValue(setQty)
        await this.btnAdd.click()
    }

    async checkCartItem(){
        await this.cartButton.click()
        await browser.pause(2000)
    }

    async checkShoppingCart(){
        await this.clickShoppingCart.click()
        await browser.pause(2000)
    }
    
    async getQtyCartValue(){
        const getQtyCart = await (this.productQtyCart).getAttribute('data-item-qty')
        return getQtyCart
    }
    async getQtySCValue(){
        const getQtySC = await (this.productQtySC).getAttribute('value')
        return getQtySC
    }

}

export default new QuantityPage()