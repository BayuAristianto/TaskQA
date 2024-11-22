import {browser, $} from '@wdio/globals'

class InventoryPage {
    //Element Locators
    get pageTitle() {return $('span[data-test="title"]')}

    get productSortSelect() {return $('[data-test="product-sort-container"]')}
    get optionNameAsc() {return this.productSortSelect.$('[value="az"]')}
    get optionNameDesc() {return this.productSortSelect.$('[value="za"]')}
    get optionPriceLoHi() {return this.productSortSelect.$('[value="lohi"]')}
    get optionPriceHiLo() {return this.productSortSelect.$('[value="hilo"]')}

    get allProductNameElement() {return $$('div[data-test="inventory-item-name"]')}
    get allProductPriceElement() {return $$('div[data-test="inventory-item-price"]')}

    get productSLB() {return $('a[data-test="item-4-title-link"]')}
    get productSLBL() {return $('a[data-test="item-0-title-link"]')}
    get productSLBTS() {return $('a[data-test="item-1-title-link"]')}
    get productSLFJ() {return $('a[data-test="item-5-title-link"]')}
    get productSLO() {return $('a[data-test="item-2-title-link"]')}
    get productSLTR() {return $('a[data-test="item-3-title-link"]')}

    get productNameCheck() {return $('div[data-test="inventory-item-name"]')}
    get productPriceCheck() {return $('div[data-test="inventory-item-price"]')}
    get backToProductBtn() {return $('#back-to-products')}

    //Page Actions
    async openPage(){
        await browser.url('https://www.saucedemo.com/inventory.html')
    }

    async orderProductByNameAsc(){
        await this.productSortSelect.click()
        await this.optionNameAsc.click()
    }

    async orderProductByNameDesc(){
        await this.productSortSelect.click()
        await this.optionNameDesc.click()
    }

    async orderProductByPriceLoHi(){
        await this.productSortSelect.click()
        await this.optionPriceLoHi.click()
    }
    async orderProductByPriceHiLo(){
        await this.productSortSelect.click()
        await this.optionPriceHiLo.click()
    }

    async getAllProductName(){
        const allProductNameText = []
        const products = await this.allProductNameElement

        for(const productName of products) {
            const productNameText = await productName.getText()
            allProductNameText.push(productNameText)
        }

        return allProductNameText
    }

    async getAllProductPrice(){
        const allProductPriceText = []
        const products = await this.allProductPriceElement

        for(const productPrice of products) {
            const productPriceText = await productPrice.getText()
            const slicePrice = productPriceText.slice(1)
            const parsePrice = parseFloat(slicePrice)
            allProductPriceText.push(parsePrice)
        }

        return allProductPriceText
    }

    async checkProductSLB(){
        await this.productSLB.click()
    }

    async checkProductSLBL(){
        await this.productSLBL.click()
    }

    async checkProductSLBTS(){
        await this.productSLBTS.click()
    }

    async checkProductSLFJ(){
        await this.productSLFJ.click()
    }

    async checkProductSLO(){
        await this.productSLO.click()
    }

    async checkProductSLTR(){
        await this.productSLTR.click()
    }

    async backToProduct(){
        await this.backToProductBtn.click()
    }

}

export default new InventoryPage()