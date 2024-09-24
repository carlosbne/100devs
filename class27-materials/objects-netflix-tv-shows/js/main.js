//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class MakeNetflixTVShow {
    constructor(title, numOfEp, seasons, language) {
        this.title = title;
        this.numOfEp = numOfEp;
        this.seasons = seasons;
        this.language = language;
    }

    playSerie(){
        console.log(`Wacthingg...${this.title}`);
    }
    selectIdiom(language){
        console.log(`swap ${this.language} for ${language}`);
    }
    deleteFinalSeason(){
        if(this.seasons > 1){
            console.log(`removing the last one`);
            this.seasons--;
        } else {
            console.log(`is ${this.seasons} remaing...`);
        }
    }
}
let NetLixo = new MakeNetflixTVShow('couve', 'varios', '2', 'ingles'); 

let NetflixLixo = new MakeNetflixTVShow('Netflix Lixo', 'muitos', '4', 'ingles');   