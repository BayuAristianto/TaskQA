import {browser, $} from '@wdio/globals'
import inventoryPage from './inventory.page.js'
class ProblemPage {
    //Element Locators
    get imgSLB() {return $('img[data-test="inventory-item-sauce-labs-backpack-img"]')}
    get imgSLBL() {return $('img[data-test="inventory-item-sauce-labs-bike-light-img"]')}
    get imgSLBTS() {return $('img[data-test="inventory-item-sauce-labs-bolt-t-shirt-img"]')}
    get imgSLFJ() {return $('img[data-test="inventory-item-sauce-labs-fleece-jacket-img"]')}
    get imgSLO() {return $('img[data-test="inventory-item-sauce-labs-onesie-img"]')}
    get imgSLTR() {return $('img[data-test="inventory-item-test.allthethings()-t-shirt-(red)-img"]')}
    //Page Actions
    async checkName(){
        const getName = await inventoryPage.productNameCheck.getText()
        if ( getName != 'Sauce Labs Backpack'){
            return true
        }
    }
}

export default new ProblemPage()