//Create a dog object that has four properties and three methods

let dog = {}

dog.name = 'Ein';
dog.race = 'Welsh Corgi';
dog.color = 'golden-white';
dog.codename = 'Data dog';

dog.data = function(){
    console.log('data-center here');
}
dog.bark = function(){
    console.log('Woof');
}
dog.jump = function(){
    console.log('Blast Off');
}