import {browser, $, expect} from '@wdio/globals'

describe('Belajar Method', function(){
    it('method click', async function(){
        await browser.url('https://webdriver.io/docs/api/element/click')

        const themeToggleBtn = await $('.toggleButton_PEV7')
        await themeToggleBtn.click()
        await browser.pause(3000)
    })

    it('method getText', async function(){
        await browser.url('https://webdriver.io/docs/api/element/getText')
        const paragraf = await $('.theme-doc-markdown p')
        const paragrafText = await paragraf.getText()

        console.log('|||Paragrafnya||| = ', paragrafText)
    })

    it.only('method setValue dan getValue', async function(){
        await browser.url('https://duckduckgo.com/')

        const searchInput = await $('#searchbox_input')
        await searchInput.setValue('Contoh Pencarian')
        const searchInputValue = await searchInput.getValue()
        await browser.pause(3000)
        console.log('==||== ', searchInputValue)
    })
})