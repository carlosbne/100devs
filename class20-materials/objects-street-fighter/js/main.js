//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function streetFighterChar (name, strength, agility, stamina){
    this.name = name;
    this.strength = strength;
    this.agility = agility;
    this.stamina = stamina;

    this.moveForward = function() {
        if(stamina > 100){
            console.log(`move ${agility * 2} meters`);
        } else{
            console.log(`move ${agility - 1} meters`);
        }
        stamina -= 1;
    }
    this.attack = function() {
        if(stamina > 0){
            console.log(`Attack with ${Math.round(strength * 1.5)} of damage!`);
        }else{
            console.log(`You can not attack, Run!!`);
        }
        stamina -= 1;
    }
    this.makeThemFeelFearrr = function(){
        console.log(`Hello, my name is ${name}. You killed my father. Prepare to die!`);
    } 
}


let chunLi = new streetFighterChar('Chun-Li', 200, 120, 100);
let ryu = new streetFighterChar('Ryu', 100, 80, 120);
let ken = new streetFighterChar('Ken', 100, 85, 115);


chunLi.attack();
ryu.makeThemFeelFearrr();
ken.moveForward();