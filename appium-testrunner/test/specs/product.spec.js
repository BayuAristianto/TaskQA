import {driver, $} from '@wdio/globals'

describe('PRODUCT LIST', function (){

    it('Click First Product', async function(){
        const firstProduct = await $('//*[@content-desc="Product Image"]')
        await firstProduct.click()
        await driver.pause(3000)
    })
    it.only('Belajar Selector', async function(){
        //const burger = await $('~View menu') //Selector accessibility id
        //const burger = await $('id=com.saucelabs.mydemoapp.android:id/menuIV') //Selector resource id
        //const burger = await $('//android.widget.ImageView[@content-desc="View menu"]') //Selector xpath
        //const burger = await $('android.widget.ImageView') //Selector class name (sulit mendetailkan tujuan)
        const burger = await $('//*[@content-desc="View menu"]') //Selector xpath



        await burger.click()
        await driver.pause(3000)
    })
})