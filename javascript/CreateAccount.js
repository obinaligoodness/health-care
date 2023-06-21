var email = document.getElementById("emailAddress")
var password = document.getElementById("Password")
var btn = document.getElementById("signButton")
var links = document.getElementById("CreateAccountLink")
var error = document.getElementById("errorMessage")
console.log(email);
console.log(links);

let func = function eml(){
    let pattern1 = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    let pattern2 = /[A-Za-z]+[0-9]/;
    let result1 = pattern1.test(email.value)
    let result2 = pattern2.test(password.value)
    if(result1===true && result2===true){
       window.location.href = "http://127.0.0.1:5500/htmls/SuccessfulAccount.html";
       console.log(true);
    }
    else{
        if(result2===false){error.textContent = "invalid password. your password should contain letters and numbers"}
        if(result1===false){error.textContent = "invalid email"}

        console.log(false)
    }
}
btn.addEventListener("click",func)


// let text = "asGO";
// let pattern1 = /[a-z]+[A-Z]/g;
// let result1 = pattern1.test(email)
// console.log(result1)
 
