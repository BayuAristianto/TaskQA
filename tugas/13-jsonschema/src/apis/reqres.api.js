import axiosInstance from "../libs/axiosInstance.js";


export function get_single_reqres (id) {
    return axiosInstance.get(`/users/` +id)
}

export function create_user_reqres (dataUser) {

    return axiosInstance.post(`/users`, dataUser)
}

export function update_user_reqres (id, updateUser) {
    return axiosInstance.put(`/users/` +id,updateUser)
}

export function delete_user_reqres (id) {
    return axiosInstance.delete(`/users/` +id)
}