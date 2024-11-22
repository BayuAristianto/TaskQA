import {browser, $, expect} from '@wdio/globals'
import tesPage from '../pageobjects/tes.page.js'

describe('Input Data', function(){
    
    it('Mengisi semua value', async function(){
        await tesPage.openPage()
        // await browser.pause(1000)
        await tesPage.clickAdd()
        // await browser.pause(1000)
        await tesPage.isiData(
            'Bayu',
            'Aristianto',
            '24',
            'bayu@gmail.com',
            '10000',
            'QA'
        )
        await browser.pause(3000)
        await tesPage.searching('24')
        await browser.pause(2000)


        await expect(browser).toHaveUrl('https://demoqa.com/webtables')
        await expect(tesPage.firstNameData).toHaveText('Bayu')
        // await expect(tesPage.lastNameData).toHaveText('Aristianto')
        // await expect(tesPage.ageData).toHaveText('24')
        // await expect(tesPage.emailData).toHaveText('bayu@gmail.com')
        // await expect(tesPage.salaryData).toHaveText('10000')
        // await expect(tesPage.departmentData).toHaveText('QA')

    })
})