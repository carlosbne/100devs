//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function MakeStrretFighterChar(charName, charStrengh, charPower, charAgility){
    this.name = charName;
    this.strengh = charStrengh;
    this.power = charPower;
    this.agility = charAgility;

    this.attack = function(){
        console.log(`You attack with ${this.strengh} of damage`);
    }
    this.ultimate = function(){
        console.log(`You attack with ${this.power}`);
    }
    this.runSayingName = function(){
        console.log(`You run with ${this.agility} metros, and yelling ${this.name}`);
    }
}

let ryu = new MakeStrretFighterChar('Ryu', 100, 'HADDUUUKKEEENNN', 5);