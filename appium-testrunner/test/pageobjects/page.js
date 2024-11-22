import { $ } from '@wdio/globals'

class Page {

    get menuButton() {return $('~View menu')}
    get loginMenu() {return $('~Login Menu Item')}
    get logoutMenu() {return $('~Logout Menu Item')}
    get logoutConfirm() {return $('id=android:id/button1')}

    async logoutProcess(){
        await this.menuButton.click()
        await this.logoutMenu.click()
        await this.logoutConfirm.click()
    }

}

export default Page