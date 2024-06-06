const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        State: 'MA'
    }
}

console.log(person);

console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

const { firstName, lastName, address:{city} } = person; // puxar os valores de um objeto como uma variavel 

console.log(firstName);
console.log(city);

person.email = 'john@gmail.com';
console.log(person);