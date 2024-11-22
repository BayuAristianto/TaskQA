import {driver} from '@wdio/globals'

export default async function verticalScroll (fromY, toY){
    await driver
        .action('pointer')
        .move({ x : 500 , fromY : 1700 })
        .down()
        .pause(250)
        .move({ x:500, toY: 1000, duration:500 })
        .up()
        .perform()
}