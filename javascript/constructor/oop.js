// console.log('Working fine...')


// const a={
    
//     fullName:"FabianRajaFernando",
//     name:{first:"Fabian",
//     middle:"Raja",
//     last:"Fernando"},
//     age: function(){
//         console.log("My age is 21...")

//     },


        
// // }
// // console.log(a);
// // console.log(a.fullName);
// // console.log(a.name["middle"]);

// // console.log(a["name"].last);
// // a.age();

// // function trying(fullName){
// //     return {
// //         Name:fullName
// //     }

// // }
// // console.log(trying(a.fullName));

// // const a={
// //     name:"fabian",
// //     age:21,
// //     sex:"male"
// // }

// // console.log(a);

// // function fac(a,b,c){

// //     return{
// //         myName:a,
// //         myAge:b,
// //         mySex:c
// //     }

// // }

// // console.log(fac(a.name,a.age,a.sex));


// const player={

//     name:"Virat Kohli",
//     age:35,
//     sex:"Male",
//     team:"India",
//     type:"Right Hand",
    
// };

// function data(name,age,sex,team,type){

//     return{
//         name,
//         age,
//         sex,
//         team,
//         type,
//         entries:function(){
      
//             console.log(
//                 `
//                 My name is ${name} and my age is ${age}.My gender is ${sex}.
//                 My Team is ${team} and I am ${type} Batsman...
                
//                 `
//             );
//         },
//     };

// }
// data("Fabian",21,"male","India","Right handed ").entries();
// const mine=data("dhoni",42,"male","India","Right Handed");
// console.log(mine);
// mine.entries();

// const father={
//     name:"Antony",
//     age:54,
//     sex:"male",
//     son:function(){
//         console.log(this);
//     },
//     grandson:function(){
//         console.log(this.sex);
//     },
//     grandfather(){
//         const a=()=>{
//            console.log(this.name);
//         };
//       a();
//     },
  
// }

// father.son();
// father.grandson();
// father.grandfather();

//Constructor function

// const a={
//     name:"fabian",
//     age:21,
//     sex:"male",
//     address:{
//         city:"chennai",
//         state:"tamilnadu",
//         country:"india"
//     },
//     mail:function(){
//         console.log(this.sex);
//     }
// }
// a.mail();




// const a={
//     name:"fabian",
//     age:21,
//     sex:"male",

// }
// function b(name,age,sex){
//     return{
//         name,
//         age,
//         sex,
//         data:function(){console.log(`
//         My name is ${name}
//         My age is ${age}
//         My gender is ${sex}
//         `)
//     }
//     }
// }
// const c=b("fabian",21,"male");
// console.log(c);
// c.data();
// function manufacture(name,varient,cc){
//     this.name=name;
//     this.varient=varient;
//     this.cc=cc;
//     this.details=function(){
//         console.log(
//             `
//             The vechicle name is ${this.name}
//             The varient is ${this.varient}
//             The cc is ${cc}
            
//             `
//         );
    
//     };
// }
// const entered=new manufacture("NS","Petrol",150);
// console.log(entered);
// entered.details();

// 
// function Players(name,age,team){
//     this.name=name;
//     this.age=age;
//     this.team=team;
//     this.details=function(){
//         console.log(
//             `
//             My name is ${this.name} and my age is ${this.age}.My team is ${this.team}.
            
            
//             `
//         )
//     }
// }
// const entered=new Players("Fabian",21,"India");
// console.log(entered);
// entered.details();


function Series(team1,team2,team3,name){
    this.team1=team1;
    this.team2=team2;
    this.team3=team3;
    this.name=name;
    this.league=function(){
        console.log(`
        The three teams to be played for qualifications are...
        ${this.team1},${this.team2} and ${this.team3}.
        `);
    };
}
const table=new Series("RCB","MI","CSK","Fabian");
console.log(table);
table.league();
const table1=new Series("SRH","PK","DC","Raja");
console.log(table1);
table1.league();

Series.prototype.homeGround=function(){
    console.log(this.name);
};
table.homeGround();
table1.homeGround();
