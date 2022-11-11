import navbar from "../components/nav.js";
let navBox = document.querySelector("#navbar____Container")
navBox.innerHTML = navbar();


let form = document.querySelector("#registration__form").addEventListener("submit", handleSubmit);
function handleSubmit(event){
    event.preventDefault();

    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let number = document.querySelector("#number").value;
    let password = document.querySelector("#password").value;

    if(!name || !email || !number || !password){
        alert("Fill in all the fields!");
        return;
    }

    email = "eve.holt@reqres.in";
    password = "pistol";

    let payload = {
        email,
        password
    }

    fetch("https://reqres.in/api/register" , {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(payload),
    }).then((res)=>{
        return res.json();
    }).then((res)=>{
        console.log(res);
        alert("Success");

        window.location.href = "login.html";

    }).catch((err)=>{
        console.log(err);
        alert("Registration Failed");
    })

}