//ternary operators
let state=true;
state==true?console.log("true"):console.log("false");

//editing object
const obj={
    name: "fabian",
    sex: "male",
    age: "21",
    phoneNumber:"9797983592"
}

function editObject(obj,bd){
    let a={...obj,age:bd,edu:"ede"};//editing and adding
    console.log(a);
    
   
}
editObject(obj,"22");

//rest operator
//addition of values ina array
//reduce method
let arr=[1,2,3,4,5]
function sum(arr){
    console.log(arr);
    return console.log(arr.reduce((acc,value)=>acc+value, 0));
}
sum(arr);

//destructuring

const taskData={
    userInfo:{
        name:"Sanjay",
        position:"mentor"
    },
    batches:["B42","B43","B52","B53"]
}

const {userInfo:{name:firstName,position},batches:[firstBatch,...rest]}=taskData;
console.log(firstName);
console.log(position);
console.log(firstBatch);
console.log(rest);

//property shorthand

const name="fabian";
const age="21"

const details={
    name,
    age
}
console.log(details);