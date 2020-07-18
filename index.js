// Code your solutions in this file
function writeCards(array, theme) {
    let arrrrr = []
    for (let i = 0; i < array.length; i++) {
        arrrrr.push(`Thank you, ${array[i]}, for the wonderful ${theme} gift!`)
    }
    return arrrrr
}

function countdown(number) {
    let countup = 0;
    while (countup <= number) {
        console.log(number --)
    }
}