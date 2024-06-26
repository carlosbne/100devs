//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/


fetch("https://api.nasa.gov/")
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(`error ${err}`);
    })