class Ipl{
    constructor(team,squad,ground){
        this.team=team;
        this.squad=squad;
        this.ground=ground;
    }
    playing(){
        console.log(`
        This team name is ${this.team}.
        Squad consists of ${this.squad} members.
        Home ground is ${this.ground}.
        
        `);
    };
};
const sheet=new Ipl("RCB",24,"Chinnaswamy Stadium");
console.log(sheet);
sheet.playing();


Ipl.prototype.substitute=function(){
    console.log("There are 7 substitues available for changes...")
}

sheet.substitute();