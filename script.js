const btnE1 = document.querySelector(".btn1");
const inputE1 = document.getElementById("input");
const copyIcon = document.querySelector(".copy")

btnE1.addEventListener("click", ()=>{
    createPassword();
});

copyIcon.addEventListener("click",()=>{
    copyPassword()
})
function createPassword(){
    const chars ="1234567890!@#$%^&*()_+~|{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    const passwordLength = 14;
let password = "";

for (let index = 0; index < passwordLength;index++){
    const randomNum = Math.floor
    (Math.random() * chars.length)

    password += chars.substring(randomNum ,randomNum + 1);

    console.log(randomNum,password)
}
inputE1.value = password;
}
function copyPassword(){
    inputE1.select ();
    inputE1.setSelectionRange(0,9999);
    navigator.clipboard.writeText
    (inputE1.value);
}