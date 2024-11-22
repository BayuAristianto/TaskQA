import {browser, $} from '@wdio/globals'
class testing{
    //Element Locators
    //button
    get addData() {return $('#addNewRecordButton')}
    get buttonSubmit() {return $('#submit')}
    get searchButton() {return $('#searchBox')}
    get editButton() {return $('edit-record-4')}

    //data
    get firstNameData() {return $('input[id="firstName"]')}
    get lastNameData() {return $('input[id="lastName"]')}
    get emailData() {return $('input[id="userEmail"]')}
    get ageData() {return $('input[id="age"]')}
    get salaryData() {return $('input[id="salary"]')}
    get departmentData() {return $('input[id="department"]')}
    get firstnameList() {return $('div[class="rt-td"]')}


    //Page Actions
    async openPage(){
        await browser.url('https://demoqa.com/webtables')
    }

    async clickAdd(){
        await this.addData.click()
    }
    async clickSubmit(){
        await this.buttonSubmit.click()

    }

    async searching(umur){
        await this.searchButton.setValue(umur)
    }

    async editData(){
        await this.editButton()
    }

    async getDataList(){
        await this.firstnameList.getValue()
    }
    async isiData(firstname, lastname, age, email, salary, department){
        await this.firstNameData.setValue(firstname)
        await this.lastNameData.setValue(lastname)
        await this.emailData.setValue(email)
        await this.ageData.setValue(age)
        await this.salaryData.setValue(salary)
        await this.departmentData.setValue(department)
        await this.buttonSubmit.click()
    }



}

export default new testing()