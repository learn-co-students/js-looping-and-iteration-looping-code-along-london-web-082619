// Code your solutions in this file

function writeCards(array, word){
    let myArray = [];
    for (let i=0; i<array.length; i++){
        myArray.push(`Thank you, ${array[i]}, for the wonderful ${word} gift!`);
    }
    return myArray;
}

function countdown(number){
    while (number>0){
        console.log(number);
        number-=1;
    }
    console.log(0);
}