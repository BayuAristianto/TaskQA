export const reqres_single_user_schema = {
    type : 'object',
    properties : 
    {
        id          : {type : 'number'},
        email       : {type : 'string'},
        first_name  : {type : 'string'},
        last_name   : {type : 'string'},
        avatar      : {type : 'string'},
        url         : {type : 'string'},
        text        : {type : 'string'}
    },

}

export const post_user_schema = {
    type : 'object',
    properties : 
    {
        id          : {type : 'number'},
        email       : {type : 'string'},
        first_name  : {type : 'string'},
        last_name   : {type : 'string'},
        avatar      : {type : 'string'},
        createAt    : {type : 'string'}
    },

}
export const put_user_schema = {
    type : 'object',
    properties : 
    {
        email       : {type : 'string'},
        first_name  : {type : 'string'},
        last_name   : {type : 'string'},
        avatar      : {type : 'string'},
        updateAt    : {type : 'string'}
    },

}



//---------------------Create Data User-------------------
export const post_alldata_id1 = 
    {
        id          : 1,
        email       : "test@gmail.com",
        first_name  : "test",
        last_name   : "user",
        avatar      : "https://reqres.in/img/faces/1-image.jpg"
    }
export const post_invalid_data_type = 
    {
        id          : 13,
        email       : true,
        first_name  : "test1",
        last_name   : "user1",
        avatar      : "https://reqres.in/img/faces/1-image.jpg"
    }

//---------------------Update Data User-------------------
export const put_alldata_id1 = 
    {
        email       : "selamatpagi@gmail.com",
        first_name  : "good",
        last_name   : "morning",
        avatar      : "https://reqres.in/img/faces/2-image.jpg"
    }
export const put_invalid_data_type = 
    {
        email       : "selamatpagi@gmail.com",
        first_name  : "good",
        last_name   : 123,
        avatar      : "https://reqres.in/img/faces/2-image.jpg"
    }
    