import { $ } from '@wdio/globals'
import Page from "./page.js";

class ProductPage extends Page{
    get productPageTitle() {return $('~title')}

}

export default new ProductPage()