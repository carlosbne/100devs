//Two functions – one object

let obj = {}

function A(){
    return obj;
}
function B(){
    return obj;
}

let a = new A();
let b = new B();

//alert( a == b );

//Create new Calculator

function Calculator() {

    this.read = function(){
        this.a = Number(prompt(`A?`));
        this.b = Number(prompt(`B?`));
    }
    this.sum = function(){
        return this.a + this.b;
    };
    this.mul = function(){
        return this.a * this.b;
    }
}

/* let calculator = new Calculator();

calculator.read();1
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() ); */
// --------------------------------------- 
// Create new Accumulator
function Accumulator(startingValue){
    this.value = startingValue;

    this.read = function(){
        this.value += Number(prompt(`adds a value?`));
    }

}
let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);