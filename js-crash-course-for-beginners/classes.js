// Class
class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

const person1 = new Person('John', 'Doe', '4-3-1990');
const person2 = new Person('Mary', 'Smith', '4-3-1995');

console.log(person1);
console.log(person1.getBirthYear());
console.log(person2.getFullName());

