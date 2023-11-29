function enterYourCard(callback){
    console.log("step 1:Card entered");
    
    setTimeout(()=>{
        callback();
    },3000);

}
function selectYourMethod(callback){
    
    console.log(`step 2:Selected withdrawal`);
    setTimeout(()=>{
        callback()},2000);
}
function enterAmount(callback){
    console.log(`step 3:2000rs entered`);
    setTimeout(()=>{
        callback()},1000);
   
}
function enterYourPin(callback){
    console.log(`step 4:pin entered`);
    setTimeout(()=>{
        callback()},2000);
}
function collectCash(){
    console.log("step 5:Cash collected");
}

// function withdrawAmount(){
//     enterYourCard();
//     selectYourMethod();
//     setTimeout(()=>{
//         enterAmount();
//     },3000);
//     enterYourPin();
//     setTimeout(()=>{
//         collectCash();
//     },5000);
    
// }
// withdrawAmount();

function details(){
    enterYourCard(()=>{
        selectYourMethod(()=>{
            enterAmount(()=>{
                enterYourPin(()=>{
                    collectCash();
                })
            })
        })
    })
};
details();