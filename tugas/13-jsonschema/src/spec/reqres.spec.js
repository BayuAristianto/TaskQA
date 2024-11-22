import expect from "../libs/expect.js";
import { update_user_reqres, create_user_reqres, delete_user_reqres, get_single_reqres } from "../apis/reqres.api.js";
import { put_invalid_data_type, put_alldata_id1, post_invalid_data_type, post_alldata_id1, post_user_schema, put_user_schema, reqres_single_user_schema } from "../schemas/reqres.schema.js";



describe ('REQRES API', function(){

    describe('/user/<ID> - Get Single User Reqres', function (){

        it('Check Status Code Get Single User - Positive', async function(){
            const response = await get_single_reqres(1)

            expect(response.status).to.equal(200)
        })
        it('Check Status Code Get Single User - Positive', async function(){
            const response = await get_single_reqres(12)

            expect(response.status).to.equal(200)
        })
        it('Check Status Code Get Single User With ID 0 - Negative', async function(){
            try {
                await get_single_reqres(0)
                throw Error
            } catch (error) {
                expect(error?.response?.status).to.equal(404)
            }          
        })

        it('Check Status Code Get Single User With ID 999999 - Negative', async function(){
            try {
                await get_single_reqres(999999)
                throw Error
            } catch (error) {
                expect(error?.response?.status).to.equal(404)
            }          
        })

        it('check valid response json schema', async function(){
            const response = await get_single_reqres(1)
            expect(response.data).to.be.jsonSchema(reqres_single_user_schema)
        })


    })


    describe('/user - Create User Reqres', function (){
        
        it('Cek Status Code Post User - Positive', async function(){
            const response = await create_user_reqres(post_alldata_id1)
            expect(response.status).to.equal(201)
        })

        it('Cek Body JSON Post User - Positive', async function(){
            const response = await create_user_reqres(post_alldata_id1)
            expect(response.data).to.be.jsonSchema(post_user_schema)
        })

        it('Cek Status Code Post User - Negative', async function(){
            try {
                const response = await create_user_reqres(post_invalid_data_type)
                throw response
            } catch (error) {
                expect(error.status).to.equal(400)
            } 
        })

        it('Cek Body Json Post User - Negative', async function(){
            try {
                const response = await create_user_reqres(post_invalid_data_type)
                throw response
            } catch (error) {
                expect(error.data).to.be.jsonSchema(post_user_schema)
            } 
        })

    })


    describe('/user/<ID> - Update User Reqres', function (){

        it('Cek Status Code Put User With ID 1 - Positive', async function(){
            const response = await update_user_reqres(1,put_alldata_id1)
            expect(response.status).to.equal(200)
        })

        it('Cek Body JSON Put User With ID 1 - Positive', async function(){
            const response = await update_user_reqres(1,put_alldata_id1)
            expect(response.data).to.be.jsonSchema(put_user_schema)
        })

        it('Cek Status Code Put User With ID 1 - Negative', async function(){
            try {
                const response = await update_user_reqres(1, put_invalid_data_type)
                throw response
            } catch (error) {
                expect(error.status).to.equal(400)
            } 
        })

        it('Cek Body JSON Put User With ID 1 - Negative', async function(){
            try {
                const response = await update_user_reqres(1, put_invalid_data_type)
                throw response
            } catch (error) {
                expect(error.data).to.be.jsonSchema(put_user_schema)
            } 

        })

    })


    describe('/user/<ID> - Delete User Reqres', function (){

        it('Check Status Code Delete - Positive', async function(){
            const response = await delete_user_reqres(1)

            expect(response.status).to.equal(204)
        })

        it('Check Status Code Delete - Positive', async function(){
            const response = await delete_user_reqres(12)

            expect(response.status).to.equal(204)
        })

        it('Check Status Code Delete - Negative', async function(){
            const response = await delete_user_reqres(0)
            expect(response.status).to.equal(404)
        })

        it('Check Status Code Delete - Negative', async function(){
            const response = await delete_user_reqres(13)
            expect(response.status).to.equal(404)
        })

    })
})