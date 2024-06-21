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

//------------ Abstraction ------------------
// hidde the details and expose only the assential 
function Circle(radius){
    this. radius = radius;

    let defaultLocation = { x: 0, y: 0 }; //this is like a private property

    let computeOptimumLocation = function(factor){
        // ... this is like a private method
    }

    this.getDefaultLocation = function() {
        return defaultLocation;
    }

    this.draw = function(){
        computeOptimumLocation(0.1); //clousure so this function have acess to a 'private method' of this parent

        console.log('draw');
    }

    Object.defineProperty(this, 'defaultLocation', { //<- THIS IS A GETTER, read only property; 
        get: function(){
            return defaultLocation;
        },
        set: function(value){
            if(!value.x || !value.y)  //<- perform validation before setting the default location
                throw new Error('Invelid location.')

            defaultLocation = value;
        }
    });


}
const circle = new Circle(10);
circle.getDefaultLocation(); // <- this way we can acess the value of default location like a method;

circle.defaultLocation // <- this way is call a function inside of a object property made in the constructor to read only;

circle.defaultLocation = 1; // <- this way is set a new value to the object propety, return the error;


circle.draw();


