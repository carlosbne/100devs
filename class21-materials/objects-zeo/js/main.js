//Create a stopwatch object that has four properties and three methods
let stopwatch = {}

stopwatch.color = 'black';
stopwatch.currentTime = '29:12';
stopwatch.brand = 'olympikus';
stopwatch.shape = 'round';

stopwatch.tellTimer = function (time){
    console.log(`The current time is ${time}`);
}

stopwatch.resetTimer = function (time){
    stopwatch.currentTime = '00:00';
    console.log(`The current Time is ${stopwatch.currentTime}`);
}

stopwatch.changeColor = function(color){
    stopwatch.color = color;
    console.log(`The new color is ${stopwatch.color}`);
}

stopwatch.tellTimer(stopwatch.currentTime);
stopwatch.resetTimer(stopwatch.currentTime);
stopwatch.changeColor('orange');