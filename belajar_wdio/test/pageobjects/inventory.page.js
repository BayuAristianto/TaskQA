import {browser, $} from '@wdio/globals'
class inventoryPage {
    //Element Locators
    get pageTitle() {return $('span[data-test="title"]') }

    get productSortSelect() {return $('[data-test="product-sort-container"]')} 
    get optionNameDesc() {return this.productSortSelect.$('[value="za"]')} 
    get allProductNameElement() {return $$('[data-test="inventory-item-name"]')} 
  //Page Actions

  async orderProductByNameDesc(){
    await this.productSortSelect.click()
    await this.optionNameDesc.click()
  }

  async openPage (){
    await browser.url('https://www.saucedemo.com/inventory.html')
  }

  async getAllProductName (){
        const allProductNameText = []
        const products = await this.allProductNameElement
        
        for (const productName of products ) {
            const productNameText = await productName.getText()
            allProductNameText.push(productNameText)
        }

        return allProductNameText
  }
}

export default new inventoryPage()