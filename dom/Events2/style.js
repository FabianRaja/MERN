// const element=document.getElementById("name");


// setTimeout(()=>{
//     element.style.color="cyan";
//     element.style.backgroundColor="black";
// },5000);

// const element1=document.getElementById("cs");
// element1.style.backgroundColor="cyan";
// element1.style.color="black";
// element1.style.border="none";
// element1.style.borderRadius="20px";

// element1.addEventListener("click",()=>{
//     element.style.color="red";
//     element.style.backgroundColor="black";
    
// });

// const childs=document.querySelectorAll(".parent");

// childs.forEach((node)=>{
//     const heading=node.querySelector('h2');
//     const button=node.querySelector('button');
//     button.addEventListener("click",()=>{
//         heading.style.color="red";
//         heading.style.backgroundColor="black";
//     })
// });

const input=document.querySelector("input");
console.log(input); 

input.addEventListener("keyup",(a)=>{
    console.log(a.key);
}

)