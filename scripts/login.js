
let form = document.querySelector("#login__form").addEventListener("submit", handleLogin);
function handleLogin(event){
    event.preventDefault();

    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    if(!email || !password){
        alert("Empty fields!");
        return;
    }

    email = "eve.holt@reqres.in";
    password = "pistol";

    let payload = {
        email,
        password
    }
    loginApi(payload);

}

async function loginApi(payload){
    try {
        let response = await fetch("https://reqres.in/api/login" , {
            method : 'POST',
            headers : {
            'Content-Type' : 'application/json'
            },
            body : JSON.stringify(payload),
        })
        let data = await response.json();
        console.log("data:",data);
        alert("Success!");
        // window.location.href = "product.html";
    } catch (error) {
        console.log("error:",error);
        alert("Try Again!");
    }
}