const inputEml =document.querySelector("#inputEmail");
const inputPw =document.querySelector("#inputPassword");
const button = document.querySelector("#btnLogin");

    inputEml.value = "bayu@gmail.com";
    inputPw.value = "BootcampSQA";
function clickBtn(){
    
    alert("Login Berhasil!");
    // console.log("Berhasil")
}
setTimeout(() => button.click(), 3000 );