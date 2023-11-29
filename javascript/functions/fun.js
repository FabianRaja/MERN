// function myage(age){
//     return age+2;
// }
// console.log(myage(12));
// console.log("___________________");

// function addition(a,b){
//     n=a+b;
//     return n; 
// }
//  addition(2,2);
// console.log("___________________");

// function subraction(z,x){
//     k=z-x;
//     return k;
// }
//  subraction(6,2);

// function addsub(c,d){
//     console.log(c,d);
//     console.log(c+d);
// }
// addsub(addition(2,6),subraction(8,4));

// function ages(age){
//     return age;
// }
// console.log(ages(21));

// function agec(a,b){
//     console.log(a(b));
// }
// agec(ages,22);

// function msg(a){
//     return `Hey ${a} welcome to guvi`;
// }

// function exe(b,c){
//     console.log(b(c));
// }
// exe(msg,"Fabian");

// function shadowingProp(){
//     const a=15;
//     if(true){
//         const a=18;
//         console.log(a);
//     }
// console.log(a);
// }
// shadowingProp();

// let a="Fabian";
// let b=21;
// console.log(`My name is ${a} and my age is ${b}`);
// console.log("My name is",a,"and my age is",b);
// console.log("My name is "+a+" and my age is "+b);

//spread operator
// let a=["fruits","veg","meat","dairy"];
// console.log(a);
// console.log(...a);

//  let b=["juices","beers",...a];
// console.log(b);

// let c=[b[1],b[5]];
// console.log(c);

// let [v0,v1,...rest]=b;

// console.log(v1);
// console.log(rest);

// const names=["fabian","raja","fernando","antony","jerina","anabel"];
// const [n1, ,n3,n4,n5,n6]=names;
// console.log(names);
// console.log(n1);
// console.log(n3);

// console.log(rest);

// const altered=rest;
// console.log(altered);
// const [a,b]=altered;
// console.log(a,b);

// const weeks = [1,2,3,4];
// const [firstweek,secondweek,...rest]=weeks;
// const required=[firstweek,secondweek];
// console.log(required);
// const remaining=[rest];
// console.log(rest);

// const addition=[5,6,7];
// console.log(addition);

// const remainder=[...remaining];
// let a=[...remainder]
// const added=[...addition,a];
// console.log(added);


// const a=[1,2,3,4,5,6];
// const [a1,a2,a3,...an]=a;
// console.log(an);

// const a=[1,2,3,4,[5,6]];
// const [a1,a2,a3,a4,a5]=a;
// console.log(a5);
// const [z,x]=a5;
// console.log(z);
// console.log(x);

// const testArray =[1,2,5,7,["sanjay",25],6];
// const [a,b,c,d,[name,age],f]=testArray;
// console.log(name);
// console.log(age);

//Object Destructing..
// const a={
//     name:"Fabian", 
//     age: 21,
//     sex:"Male",
//     fullName:["Fabian","Raja","Fernando"]
// };
// const {sex}=a;
// //console.log(a);
// //console.log(name);
// //console.log(age);
// console.log(sex);
//console.log(fullName);

// const b=fullName;
// console.log(b);
// const [firstName]=b;
// console.log(firstName);
// console.log(middleName);
// console.log(lastName);







