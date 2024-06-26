//Create a Tony Hawk Pro Skater constructor that makes skating game characters with 4 properties and 3 methods

function MakeSkaterChar(chName,chStance,chMove,experiencePoint){
    this.characterName = chName;
    this.xp = experiencePoint;
    this.stance = chStance;
    this.specialMove = chMove;
    
    this.doOllie = function(){
        console.log('Ollied!');
    }
    this.doKickFlip = function(){
        console.log('KickFlip!');
    }
    this.doNollieHealFlip = function(){
        console.log('Nollie Heal Flippp!');
    }
}

let rayssaLeal = new MakeSkaterChar('Rayssa Leal', 'Goofy', 'BackSlide-Flip', 1329990)