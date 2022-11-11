
import navbar from "../components/nav.js"
import {footer} from "../components/navbar.js"
import {lastbar} from "../components/navbar.js"
let last=document.getElementById("last_bar")
last.innerHTML=lastbar()
let foot=document.getElementById("footer")
foot.innerHTML=footer()
let nav=document.getElementById("navbar");
nav.innerHTML=navbar();
console.log(nav);
