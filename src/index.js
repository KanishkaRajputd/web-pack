import css from "./index.css"
console.log("hii");

var s=document.querySelector("#button")
s.addEventListener("click",hello);




function hello(){

let what=document.querySelector("#what").value;
let when=document.querySelector("#when").value;
console.log(when,what)
let div=document.createElement("div")
div.style.backgroundColor=Math.random
div.setAttribute("id","con1");

let put=document.querySelector("#con2");
let h1=document.createElement("h3");
// let btn=document.createElement("button")


h1.textContent=what +" - "+when;

div.append(h1,btn);
put.append(div);
console.log("hello");

}
