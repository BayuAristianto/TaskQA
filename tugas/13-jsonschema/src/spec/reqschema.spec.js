import expect from "../libs/expect.js";

describe.skip('Schema Trial', function(){
    it ('coba primitive type', function(){
        
        const nama = "budi"
        
        const schema = {type : "string"};
        
        expect(nama).to.be.jsonSchema(schema)
    })

    it('coba tipe objek', function(){

        const todo = {
            id : 1,
            title : 'Bermain badminton',
            completed : false
        }

        const schema = {
            type : 'object',
            properties : {
                id : {type : 'number'},
                title : {type : 'string'},
                completed : {type : 'boolean'}
            }
        }

        expect(todo).to.be.jsonSchema(schema)
    })
})