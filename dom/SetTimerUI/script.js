// let b=0;
// const a=setInterval(()=>{
//     b++;
//     console.log(b);
//     stop();
// },2000);

// function stop(){
//     if(b===3){
//         clearInterval(a);
//     }
// }

let number=10;

function countDown(){
    number--;
    console.log(number);
    const st=setTimeout(countDown,1000);
    if(number==0){
        clearTimeout(st);
    }
}
countDown();