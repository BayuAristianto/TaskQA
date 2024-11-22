import {browser, $} from '@wdio/globals'

class RatingPage{
    //Element Locators
    get addYourReview() {return $('a[class="action add"')}
    get tabReview() {return $('a[id="tab-label-reviews-title"]')}
    get countReview() {return $('a[class="action view"]')}

    get nicknameRating() {return $('#nickname_field')}
    get summaryRating() {return $('#summary_field')}
    get reviewRating() {return $('#review_field')}
    get submitBtnReview() {return $('button[class="action submit primary"]')}
    get successSubmit() {return $('div[class="message-success success message"]')}
    
    get requiredValue() {return $('div[class="control"]')}
    get requiredStarMassage() {return $('div[id="ratings[4]-error"]')}
    get requiredNicknameMassage() {return $('div[id="nickname_field-error"]')}
    get requiredSummaryMassage() {return $('div[id="summary_field-error"]')}
    get requiredReviewMassage() {return $('div[id="review_field-error"]')}

    get blockReview() {return $('#reviews')}
    get blockRating() {return $('div[class="rating-summary item"]')}
    get blockStars() {return $('div[class="rating-result"]')}
    get blockReviewContent() {return $('div[class="review-content"]')}
    get blockDateReview() {return $('div[class="review-details"]')}
    get textTitle() {return $('div[id="customer-reviews"] strong')}
    get textReviewTitle() {return $('div[class="review-title"]')}


    //Page Actions
    async openPage(){
        await browser.url('https://magento.softwaretestingboard.com/fusion-backpack.html')
    }

    async clickReview(){
        await this.addYourReview.click()
        await browser.scroll(0,50)
    }

    async clickTabReview(){
        await this.tabReview.scrollIntoView()
        await browser.pause(2000)
        await this.tabReview.click()
        await browser.pause(2000)

    }
    async clickCountReview(){
        await this.countReview.click()
        await browser.pause(2000)
    }

    async chooseStars(stars){
        await browser.execute(function (ratingStars) {
            document.querySelector(`#Rating_${ratingStars}`).checked = true
        }, stars)
    }
    

    async dataReview(nickname, summary, review){
        await this.nicknameRating.setValue(nickname)
        await this.summaryRating.setValue(summary)
        await this.reviewRating.setValue(review)
        await this.submitBtnReview.click()

    }


}


export default new RatingPage()