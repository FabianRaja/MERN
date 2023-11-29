//set interval
// let num=1;
// function printing(){
// const a=setInterval(()=>{
//     console.log(num);
//     num++;
//     if(num>10){
//         clearInterval(a);
//     }
// },250);
// }
// printing();

// num=1;
// let a=setInterval(()=>{
//     console.log("fabian");
//     num++;
//     if(num>10){
//         clearInterval(a);
//     }
// },100);


// let a=10;
// // console.log(b);
// function sample(){
//     console.log(a);
//     let b=20;
//     console.log(a);
//     // console.log(c);
//     function sample1(){
//         console.log(a);
//         let c=30;
//         console.log(c);
//         console.log(b);
//         console.log(a);
//     }
//     sample1();
// }
// sample();


// calculation for infinite storing

function mul(val){
    return function(val2){
        if(val2) return mul(val*val2);
        return val;
    };
}
console.log(mul(2)(3)(3)())


//just practice