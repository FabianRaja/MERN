const Element=document.getElementById("result");

function altmsg(msg){
    alert(msg);
    Element.innerText="Hi there";
}
function pmmsg(){
    let number=prompt("Can I get your number?");
    console.log(number);
    Element.innerText=number;
    
}
function cnfmsg(){
    let confirmmethod=confirm("This site is only for male?");
    console.log(confirmmethod);
    Element.innerText=confirmmethod;
}

// console.log("start")
// setTimeout(()=>{
//     console.log("time's up");
//     console.log("end");
// },5000);



    // countdown();

let value=document.getElementById("tm");


let number=10;
function countdown(){    
      number--;
     const b= setTimeout(countdown,500);
     value.innerText=number;
      if(number==0){
        value.innerText="Happy New Year";
        clearTimeout(b);
      }
      
    }
    countdown();