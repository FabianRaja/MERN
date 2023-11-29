function primeNumber(num){
    if(num%2!=0 && num%3!=0 && num%5!=0){
        return true;
    }else{
        return false;
    }
}


let a=25;
if(primeNumber(a)){
    console.log("This is a prime number",a);
}else{
    console.log("This is not a prime number",a);
}