// function lock(name){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(name=="fabian"){
//                 resolve("Name valid and accepted")
//             }else{
//                 reject("Invalid Name");
//             }
//         },2000)
//     })
// }
// function details(pass){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(pass=="21052002"){
//                 resolve("Password Accepted");
//             }else{
//                 reject("Invalid Password");
//             }   
//         },3000)
//     })
// }
// function present(name,pass){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(`            Encrypted Details:
//             Name : ${name}
//             Password : ${pass}
//             `)
//         },2000);
//     })
// }

// async function output(name,pass){
//     try{
//         const a=await lock(name);
//         console.log(a);
//         const b=await details(pass);
//         console.log(b);
//         await present(name,pass);
        
//     }
//     catch(reject){
//         console.log(reject);
//     }
// }

// output("fabian","21052002");

