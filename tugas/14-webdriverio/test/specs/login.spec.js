import {browser, $, expect} from '@wdio/globals'

describe('Belajar Selector', function(){
    it('Menggunakan CSS Selector ', async function (){
        await browser.url('https://www.saucedemo.com/')

        const loginBtn = await $('input#login-button')
        await loginBtn.click()
        await browser.pause(5000)
    })
    it('Menggunakan Link Selector', async function(){
        await browser.url('https://the-internet.herokuapp.com/')

        await $('=Basic Auth').click()
        await browser.pause(3000)
    })

    it('Menggunakan Text Selector', async function(){
        await browser.url('https://www.saucedemo.com/')

        const title = await $('div=Swag Labs')
        const titleText = await title.getText()
        console.log('Title : ', titleText)
    })

    it.only('Menggunakan xPath Selector', async function(){
        await browser.url('https://www.saucedemo.com/')

        const inputUsername = await $('//input[@data-test = "username"]')
        await inputUsername.setValue('User Bambang')

        await browser.pause(3000)
    })

    
})