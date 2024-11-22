import axios from "axios";

// axios
// .get('https://reqres.in/api/users/1')
// .then((res) => console.log(res.data))
// .catch((err) => console.log(err))

//with try catch

//=================SINGLE USER=================
const getUsersById = async () =>{
    try {
        const response = await axios.get("https://reqres.in/api/users/1");
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }

};

getUsersById();

//=================CREATE=================
const createNewUsers = async(payload) => {
    try {
        const response = await axios.post(
            "https://reqres.in/api/users",
            payload
        );
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
};

const payload = {
    id : 7,
    email :"bayu@gmail.com",
    first_name : "Rex",
    last_name : "ion",
    avatar : ""
};

createNewUsers(payload);

//=================UPDATE=================

const updateUsersById = async(id, payload) => {
    try {
        const response = await axios.put(
            `https://reqres.in/api/users/${id}`,
            payload
        );
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}

const payloadUpdate = {
    email : "rexion@gmail.com"
};

updateUsersById(1, payloadUpdate)

//=================DELETE=================
const deleteUsersById = async(id) => {
    try {
        const response = await axios.delete(
            `https://reqres.in/api/users/${id}`
        );
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
};

deleteUsersById(2);