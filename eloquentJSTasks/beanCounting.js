//task 1

function countBs(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === 'B'){
            count++;
        }
    }
    return count;
}

console.log(countBs('BOBBOBISONBOFBOBILAND'));

//task 2

function countChar(str, char){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === char){
            count++;
        }
    }
    return count;
}

console.log(countChar("kakkerlak", "k"));