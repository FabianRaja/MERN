class cse{
    constructor(a1,a2,a3){
        this.a1=a1;
        this.a2=a2;
        this.a3=a3;
    }
    get A1(){
        return this.a1;
    }
    set A1(CseA1){
        if(CseA1>40){
            console.log("Anonymous student is inside the class")
        }else{
            this.a1=CseA1;
        };
    };
    strength(){
        let Total=(this.a1+this.a2+this.a3);
        console.log(`
        Total Strength:

        Class A1 : ${this.a1}
        Class A2 : ${this.a2}
        Class A3 : ${this.a3}

        Total Cse : ${Total}
        `);
    };
}
const computer=new cse(40,50,45);
console.log(computer);
computer.strength();
computer.A1=30;
computer.strength();