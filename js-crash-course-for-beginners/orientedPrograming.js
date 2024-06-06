// Constructor function
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    /* this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`
    } */
} 

Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}


//Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1990');
const person2 = new Person('Mary', 'Smith', '4-3-1995');

/* console.log(person1);

console.log(person2.dob);
 */
console.log(person1.getBirthYear());
console.log(person2.getFullName());
console.log(person1);