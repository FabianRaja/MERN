let a=[1,2,3,4,5];

function oddeven(b){
   for(i=0;i<b.length;i++){
    if(b[i]%2==0){
        console.log("This is even number",b[i]);
    }else{
        console.log("This is odd number",b[i]);
    }
   }
}

oddeven(a);