import axiosInstance from "../libs/axiosInstance.js";

export function get_data_user(id){
    return axiosInstance.get(`//`+id)
}

export function create_user_reqres (dataUser){
    return axiosInstance.post(`//`+id)
}
