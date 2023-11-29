class Rcb{
    
    constructor(teams,ground,squad){
        
        this.teams=teams;
        this.ground=ground;
        this.squad=squad;
        ;
        
    }
    trophies(){
        console.log("None trophies won");
    }
    sheet(){
        let totalSquad=(this.squad)/2;
        console.log(`
        Team:
        Team name : ${this.teams}
        Home Ground : ${this.ground}
        Squad Strength : ${this.squad} players
        Total Squad : ${totalSquad}`);
    };
}
// const auction=new Rcb("Royal Challengers Bangalore","Chinnaswamy Stadium",24);
// console.log(auction);
// auction.sheet();

class Media extends Rcb {
    constructor(teams,ground,squad,insta,youtube,twitter){
        super(teams,ground,squad);
        this.insta=insta;
        this.youtube=youtube;
        this.twitter=twitter;}
        get collection(){
            return this.squad;
        }
        set collection(strength){
            if(strength>25){
                console.log("Squad shouldn't be greater than 25")
            }else if(strength<18){
                console.log("Squad must be greater than 17");
            }else{
                this.squad=strength;
            }
        }
        // trophies(){
            // console.log("4 trophies won");
        // }
        remaining(){
            console.log(`
        Remaining players : ${25-(this.squad)}`)
        }
        database(){

            console.log(`
        Database:
        Instagram = ${this.insta} followers
        Youtube = ${this.youtube} followers
        Twittser = ${this.twitter} followers
            `);
        };
    }

const media=new Media("CSK","Chepauk",22,"14M","17M","24M");
console.log(media);
media.sheet();
media.database();
media.remaining();

const newTeam=new Media("Mi","Wankhede Stadium",21,"13M","17M","30M");
console.log(media);
newTeam.sheet();
newTeam.database();
newTeam.remaining();

newTeam.collection=24;
newTeam.sheet();
newTeam.trophies();