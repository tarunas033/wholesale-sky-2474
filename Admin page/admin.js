

document.querySelector("form").addEventListener("click",()=>{
myFun(event);
});

let myFun=(e)=>{
    e.preventDefault();
    let n=document.getElementById("name").value;
    let imagee=document.getElementById("image").value;
    let pricee=document.getElementById("price").value;
    let descriptionn =document.getElementById("description").value;

   
    
    let addProduct={
        name:n, 
        image:imagee,
        price:pricee,
        description:descriptionn
    }
    getdata(addProduct);
    
}

let getdata=(add_p)=>{
    let array_p=JSON.parse(localStorage.getItem("addProduct"))||[];
    array_p.push(add_p);
    localStorage.setItem("addProduct",JSON.stringify(array_p));

}


let store_data=JSON.parse(localStorage.getItem("addProduct"))||[];
console.log(store_data);
let container=document.getElementById("container")
container.innerHTML=null;
let append =(data)=>{

    data.forEach(({name,image,price,description})=>{
        let box=document.createElement("div")
        let img=document.createElement("img")
        img.src=image
        let nam=document.createElement("h3")
        nam.innerText=name
        let desc=document.createElement("p")
        desc.innerText=description
        let p=document.createElement("p")
        p.innerText=price;


        box.append(img,nam,desc,p)
        container.append(box)
        
    })
}


 window.onload=()=>{
    append(store_data);

}