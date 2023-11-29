function insertCard(){
    console.log("step 1: Card is processing");
}
function selectAccount(){
    console.log("step 2: Savings account selected");
}
function selectOptions(){
    console.log("step 3: Withdraw Option Selected");
}
function securityPin(){
    console.log("step 4: Security pin entered");
}
function collectCash(){
    console.log("step 5: Collect your Cash");
}

// function withdrawCash(){
//     insertCard();

//     setTimeout(()=>selectAccount(),3000);
    
//     selectOptions();

//     setTimeout(()=>securityPin(),3000);

//     collectCash();
// }
// withdrawCash();

const atm=(a,b)=>{
  a;
  setTimeout(()=>{
    b;
  },3000);
 
}
atm(insertCard(),selectAccount());
atm(selectOptions(),securityPin());
atm(collectCash());