let cart = JSON.parse(localStorage.getItem("add1"));

let proceedForPay = document.querySelector("#payment");
proceedForPay.addEventListener("click",() =>{
    window.location.href="../PaymentPage/payment.html";
})

let itemNum = cart.length;
let lengthDisplay = document.querySelector(".cart___lengthText");
lengthDisplay.innerText = `Cart : ${itemNum}`;


let container = document.querySelector("section");

let displayProducts =(cart) =>{
    container.innerHTML = null;
    cart.forEach(({image,name,description,price},index)=>{

        let productDiv = document.createElement("div");
        productDiv.setAttribute("id","prodBox");

        let productVisual = document.createElement("img");
        productVisual.setAttribute("id","prodImage");
        productVisual.src = image;

        let productName = document.createElement("p");
        productName.setAttribute("id","prodName");
        productName.innerText = name;

        let productDesc = document.createElement("p");
        productDesc.setAttribute("id","prodDesc");
        productDesc.innerText = description;

        let productAmount = document.createElement("p");
        productAmount.setAttribute("id","prodAmt");
        productAmount.innerText = `$` + price;

        let productButton = document.createElement("button");
        productButton.setAttribute("id","prodBtn");
        productButton.innerText = "Remove";
        productButton.onclick = () => {
            deleteFromCart(index);
        }

        productDiv.append(productVisual,productName,productAmount,productButton);
        container.append(productDiv);
    })
}

displayProducts(cart);

let totalPrice = () => {
    let sum = 0;
    cart.map((ele)=>{
        sum += ele.price;

        // console.log(ele);
    })
    let displayPrice = document.querySelector("#priceDisplay");
    displayPrice.innerText = `Total Price : $${Math.round(sum)}`;
    localStorage.setItem("total",JSON.stringify(Math.round(sum)));


}

totalPrice();

let deleteFromCart = (index) => {
    // console.log(index);
    let cart = JSON.parse(localStorage.getItem("add1"));
    cart.splice(index,1);
    window.location.reload();
    localStorage.setItem("add1",JSON.stringify(cart));
    displayProducts(cart);
    totalPrice();
}
