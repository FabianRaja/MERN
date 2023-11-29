//normal promise
// let value=21;
// let eligiblePromise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//           if(value>=18){
//             resolve("Eligible");
//           }else{
//             reject("Not Eligible");
//           }
//     },3000);
// });
// eligiblePromise
// .then((result)=>console.log(result))
// .catch((result)=>console.log(result));


//chaining
// let data=new Promise((resolve,reject)=>{
//     let number=60;
//     setTimeout(()=>{
//         if(number>50){
//             resolve(number);
//         }else{
//             reject("Number is 50 or below 50");
//         }
//     },3000);
// })
// data
// .then((result)=>{
//     console.log(result);
//     return result*2;
// })
// .then((result)=>{
//     console.log(result);
// })
// .catch((result)=>console.log(result));

//promise from inside the function
// function enterName(name){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(name.length==0){
//                 reject("Please enter a valid name");
//             }else{
//                 resolve(name);
//             }
//         },5000)
//     })
// }
// function Enterage(name){
//     setTimeout(()=>{
//         console.log(`Hi ${name}.Please enter your age...`)
//     },4000)

// }
// function details(name,age){
//     setTimeout(()=>{
//         console.log(`My name is ${name} and my age is ${age}`)
//     },3000)
// }

// enterName("fabian")
// .then((result)=>{
//     console.log(result);
//     return result;
// })
// .then((result)=>{
//     Enterage(result);
//     return result;
// })
// .then((result)=>{
//     details(result,21);
// })
// .catch((result)=>console.log(result));


//Promise All
// let promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(20);
//         console.log("1 checked");
//     },2000);
// })
// let promise1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(40);
//         // reject("Rejected");
//         console.log("2 checked");
//     },4000);
// })
// let promise2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(60);
//         console.log("3 checked");
//     },6000);
// })

// Promise.all([promise,promise1,promise2])
// .then((result)=>{
//     console.log(result);
//     return result;
// })
// .catch((result)=>{
//     console.log(result);
// })

fetch("https://restcountries.com/v3.1/all")
.then((result)=>result.json())
.then((result)=>console.log(result))
