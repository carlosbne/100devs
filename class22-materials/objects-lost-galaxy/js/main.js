//Create a mouse object that has four properties and three methods
let mouse = {}

mouse.color = 'black';
mouse.buttons = 4;
mouse.brand = 'Hypex'
mouse.rgb = true;

mouse.leftClick = function(){
    console.log(`Left Click`);
}
mouse.scroll = function(){
    console.log(`scolling`)
}
mouse.move = function(){
    console.log(`moving aroud`);
}