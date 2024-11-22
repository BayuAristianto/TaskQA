import {browser, $} from '@wdio/globals'

class CartPage {
    //Element Locators
    get productSLB() {return $('a[data-test="item-4-title-link"]')}
    get productSLBL() {return $('a[data-test="item-0-title-link"]')}
    get productSLBTS() {return $('a[data-test="item-1-title-link"]')}
    get productSLFJ() {return $('a[data-test="item-5-title-link"]')}
    get productSLO() {return $('a[data-test="item-2-title-link"]')}
    get productSLTR() {return $('a[data-test="item-3-title-link"]')}


    get buttonAddProductSLB() {return $('#add-to-cart-sauce-labs-backpack')}
    get buttonAddProductSLBL() {return $('#add-to-cart-sauce-labs-bike-light')}
    get buttonAddProductSLBTS() {return $('#add-to-cart-sauce-labs-bolt-t-shirt')}
    get buttonAddProductSLFJ() {return $('#add-to-cart-sauce-labs-fleece-jacket')}
    get buttonAddProductSLO() {return $('#add-to-cart-sauce-labs-onesie')}
    get buttonAddProductSLTR() {return $('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]')}

    get removeProductSLB() {return $('#remove-sauce-labs-backpack')}
    get removeProductSLBL() {return $('#remove-sauce-labs-bike-light')}
    get removeProductSLBTS() {return $('#remove-sauce-labs-bolt-t-shirt')}
    get removeProductSLFJ() {return $('#remove-sauce-labs-fleece-jacket')}
    get removeProductSLO() {return $('#remove-sauce-labs-onesie')}
    get removeProductSLTR() {return $('[data-test="remove-test.allthethings()-t-shirt-(red)"]')}

    get continueShopping() {return $('#continue-shopping')}
    get checkoutBtn() {return $('#checkout')}
    
    
    get shoppingCart() {return $('a[data-test="shopping-cart-link"]')}
    get titleS() {return $('span[data-test="title"]')}
    get countItem() {return $('span[data-test="shopping-cart-badge"]')}
    
    //Page Actions
    async openPage(){
        await browser.url('https://www.saucedemo.com/inventory.html')
    }
    async shoppingCartBtn(){
        await this.shoppingCart.click()
    }
    async checkoutButton(){
        await this.checkoutBtn.click()
    }
    async continueShoppingBtn(){
        await this.continueShopping.click()
    }
  
    //ADD
    async addProductSLB(){
        await this.buttonAddProductSLB.click()
    }

    async addProductSLBL(){
        await this.buttonAddProductSLBL.click()
    }
    async addProductSLBTS(){
        await this.buttonAddProductSLBTS.click()
    }

    async addProductSLFJ(){
        await this.buttonAddProductSLFJ.click()
    }
    
    async addProductSLO(){
        await this.buttonAddProductSLO.click()
    }

    async addProductSLTR(){
        await this.buttonAddProductSLTR.click()
    }

    async addAllProduct(){
        await this.buttonAddProductSLB.click()
        await this.buttonAddProductSLBL.click()
        await this.buttonAddProductSLBTS.click()
        await this.buttonAddProductSLFJ.click()
        await this.buttonAddProductSLO.click()
        await this.buttonAddProductSLTR.click()
    }

    
    //REMOVE
    async removeSLB(){
        await this.removeProductSLB.click()
    }

    async removeSLBL(){
        await this.removeProductSLBL.click()
    }

    async removeSLBTS(){
        await this.removeProductSLBTS.click()
    }

    async removeSLFJ(){
        await this.removeProductSLFJ.click()
    }

    async removeSLO(){
        await this.removeProductSLO.click()
    }

    async removeSLTR(){
        await this.removeProductSLTR.click()
    }
    
    async removeAllItem(){
        await this.removeProductSLB.click()
        await this.removeProductSLBL.click()
        await this.removeProductSLBTS.click()
        await this.removeProductSLFJ.click()
        await this.removeProductSLO.click()
        await this.removeProductSLTR.click()
    }


}

export default new CartPage()