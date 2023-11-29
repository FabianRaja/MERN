// function calculate(num1,num2,operation){
//     if(operation==="add"){
//         const add=num1+num2;
//         console.log(add);
//     }
//     if(operation==="sub"){
//         const sub=num1-num2;
//         console.log(sub);
//     }
//     if(operation==="mul"){
//         const sub=num1*num2;
//         console.log(sub);
//     }
//     if(operation==="div"){
//         const sub=num1/num2;
//         console.log(sub);
//     }

// }

//getting value from the terminal using process.argv
// calculate(+process.argv[2],+process.argv[3],process.argv[4]);





//reading a file
// const fs=require("fs");

// fs.readFile("config.json","UTF-8",(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         // console.log(data);
//         const value=JSON.parse(data);
//         console.log(value[0].port);
//     }

// })




//creating a file and writing content
// const fs=require("fs");

// const content="Hi there im written in node js";

// fs.writeFile("./new.txt",content,(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("written success");
//     }
// })


//updating a file

// const content="\nNew line added succesfully"
// const fs=require("fs");
// fs.appendFile("./sample.txt",content,(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("file updated  successfully");
//     }
// })




//deleting a file
// const fs=require("fs");

// fs.unlink("./new.txt",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("file deleted successfully");
//     }
// })


//Operating System Informations
// const os=require("os");
// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.version());
// console.log(os.cpus());


//date and time
// const time=Date.now();
// console.log(time);

// const date=new Date();
// console.log(date.getDate());

// console.log(date.getMonth());

// console.log(date.getFullYear());

// console.log(date.toUTCString().slice(0,13));


//external packages