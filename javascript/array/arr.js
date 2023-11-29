// const a=[1,2,3,4,5,6,7,8,9,10];
// console.log(a);
// const b=["a","b","d","c","f","A","Z"];
// console.log(b);

// a.push(11);
// console.log(a);

// a.pop();
// console.log(a);

// a.unshift(0);
// console.log(a);

// a.shift();
// console.log(a);

// a.sort((a,b)=>a-b);
// console.log(a);

// b.sort((a,b)=>a-b);
// console.log(b);

// a.reverse();
// console.log(a);

// b.reverse();
// console.log(b);

// const c=["a","b",1,2];
// console.log(c.concat(3,"c"));



// console.log("------------------------------MRF-----------------------------");



// const mrf=[1,2,3,4,5];
// let newarray=mrf.map((value,index,actarr)=>{
//    console.log(`
//    value : ${value}
//    index : ${index}
//    array : ${actarr}
   
//    `)
//    return value;
// });
// console.log(newarray);

// const mapArray=[10,20,30];
// const ind=mapArray.map((value,index,actualArray)=>{
//     console.log(`
//     value:${value}
//     index:${index}
//     actualArray:${actualArray}`)
//     return value*2;
// });
// console.log(ind);

// console.log(mapArray);
// const z=mapArray.filter((value,index,actarray)=>value %2==0);
// console.log(z);

// const red=mapArray.reduce((acc,value,index,array)=>{
//     return acc+=value;
// },2);
// console.log(red);

const chain=[1,2,3,4,5,6,7,8,9,10];
const result=chain.filter((value)=>value%2==0).map((value)=>value*2).reduce((acc,value)=>acc+=value,40);
console.log(result);