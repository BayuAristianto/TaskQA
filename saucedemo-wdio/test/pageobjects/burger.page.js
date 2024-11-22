import {browser, $} from '@wdio/globals'

class BurgerPage {
    //Element Locators
    get burgerBtn() {return $('#react-burger-menu-btn')}

    get listMenu() {return $('.bm-menu-wrap')}
    get inventorySidebar() {return $('#inventory_sidebar_link')}
    get aboutSidebar() {return $('#about_sidebar_link')}
    get logoutSidebar() {return $('#logout_sidebar_link')}
    get resetSidebar() {return $('#reset_sidebar_link')}

    get loginTitle() {return $('.login_logo')}
    //Page Actions
    async openPage(){
        await browser.url('https://www.saucedemo.com/inventory.html')
    }
    async burgerListMenu(){
        await this.burgerBtn.click()
    }
    async allItemMenu(){
        await this.inventorySidebar.click()
    }
    async aboutMenu(){
        await this.aboutSidebar.click()
    }
    async logoutMenu(){
        await this.logoutSidebar.click()
    }
    async resetAppState(){
        await this.resetSidebar.click()
    }
}

export default new BurgerPage()