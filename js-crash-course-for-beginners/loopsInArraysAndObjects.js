const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
]


// the two of these do the same thing, but the last for is more simple
for(let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
}

for(let todo of todos){
    console.log(todo.id); 
}


//forEach -> loops to them
todos.forEach(function(todo){
    console.log(todo.text);
});

//map -> create a new array from an array
const todoText = todos.map(function(todo){
    return todo.text;
});

console.log(todoText);

//filter -> create a new array based on an condition
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
});

console.log(todoCompleted);

//we can also chain on other Array methody (High Order Array Method check later)

const todoCompletedAndText = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})

console.log(todoCompletedAndText);
