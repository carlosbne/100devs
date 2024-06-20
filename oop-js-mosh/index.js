//------- Object Literal notation ----------
let circleLiteral = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function(){
        console.log('draw');
    }
};

//circle.draw();


// --- Factories Function ---

function createCircle(radius){
    return {
        radius,
        draw: function(){
            console.log('draw');
        }
    };
    
}
const circle1 = createCircle(1);


// --- Constructor Function ---

function Circle(radius){
    this. radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}
const circle = new Circle(10);

// ------- working with properties
circle.location = { x: 1 };

const propertyName = 'center location';
circle[propertyName] = { x: 1};

delete circle.location;

// interate all properties of a object
for( let key in circle ){
    if (typeof circle[key] !== 'function')
        console.log(key, circle[key]);
}
//to see all the keys of a object and return a array
const keys = Object.keys(circle);
console.log(keys);

// to check if a object has a inner propertie
if('radius' in circle){
    console.log('Circle has a radius.');
}

//---------