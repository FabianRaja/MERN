//creating an element
let divElement=document.createElement("div");
divElement.setAttribute("class","js");
divElement.setAttribute("id","js2")
console.log(divElement);


let aElement=document.createElement("a");
aElement.setAttribute("href","https://www.google.com");
aElement.setAttribute("target","_blank");
console.log(aElement);


let pElement=document.createElement("p");
pElement.setAttribute("id","fsize");
console.log(pElement);  

let hElement=document.getElementById("heading");
console.log(hElement);

let cElement=document.getElementsByClassName("head");
console.log(cElement);

let queryElement=document.querySelector(".query");
queryElement.style.color="red";
console.log(queryElement);

let qallElement=document.querySelectorAll(".query");
console.log(qallElement);

const colors=["red","green","blue","yellow","violet"];

for(let i=0;i<qallElement.length;i++){
    console.log(qallElement[i]);
    qallElement[i].style.backgroundColor=colors[i];
}

let oenElement=document.createElement("div");
oenElement.setAttribute("class","newclass");
oenElement.innerText +=`raja`;
console.log(oenElement);


oenElement.innerHTML += `<b class="bld">I'm bold tag</b> 
<h6>I'm h6 tag</h6>`

document.body.append(oenElement);

let newone=document.createElement("div");
newone.style.backgroundColor="cyan";
newone.style.margin="20px";

document.body.append(newone);

const c=newone.appendChild(oenElement);
console.log(c);