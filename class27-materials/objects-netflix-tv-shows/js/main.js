//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class MakeNetflixTVShow {
    constructor(name, epsodios, temporadas, dublagem) {
        this.name = name;
        this.epsodios = epsodios;
        this.temporadas = temporadas;
        this.dublagem = dublagem;
    }

    playSerie(){
        console.log(`Wacthingg...${this.name}`);
    }
    selectIdiom(dublagem){
        console.log(`swap ${this.dublagem} for ${dublagem}`);
    }
    deleteFinalSeason(){
        if(this.temporadas > 1){
            console.log(`removing the last one`);
            this.temporadas--;
        } else {
            console.log(`is ${this.temporadas} remaing...`);
        }
    }
}

let NetflixLixo = new MakeNetflixTVShow('Netflix Lixo', 'muitos', '4', 'ingles');   