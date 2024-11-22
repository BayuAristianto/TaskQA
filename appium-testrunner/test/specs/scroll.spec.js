import {driver} from '@wdio/globals'
import verticalScroll from '../helpers/scroll.js'
describe('SCROLL', function(){
    it('Latihan Scroll', async function(){

        await driver.pause(2000)
        await verticalScroll(1700, 1000)
        await driver.pause(2000)

    })
})