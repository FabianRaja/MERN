// function withoutPromise(){
//     return new Promise((resolve,reject)=>{
//         resolve("Got by Promise");
//     })
// }

// withoutPromise().then((result)=>console.log(result));


// async function byAsync(){
//     return "Wow by async keyword"
// }

// byAsync().then((result)=>console.log(result));

// function delay(time){
//     return new Promise((result)=>setTimeout(result,time));
// }

// async function output(time){
//     console.log("start");
//     await delay(time);
//     console.log("processing");
//     await delay(time);
//     console.log("end");
// }
// output(3000);

function fetchContent(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(data=="error"){
                reject("Manual error applied")
            }else{
                resolve("Process Successfull")
            }
        },4000);
    });
}

async function output(param){
    // fetchContent("error")
    // .then((result)=>console.log(result))
    // .catch((err)=>console.log(err));


    // const asyncAwait=await fetchContent(param);
    // console.log(asyncAwait);

    try{
        const asyncAwait=await fetchContent(param);
        console.log(asyncAwait);
    }catch(reject){
        console.log(reject);
    }
}
output("");