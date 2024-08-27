//Create a constructor with 4 properties and 3 methods
function MakePizza(souce, size, toppings, crust){
    this.souce = souce;
    this.size = size;
    this.toppings = toppings
    this.crust = crust 

    this.estimatedDelivaryTime = function(){
        console.log('calculating...')
    }
    this.burnMouth = function(){
        console.log('ASUkjskakskkajhs')
    }
    this.frisbee = function(){
        console.log('Weeeeehet')
    }
}

