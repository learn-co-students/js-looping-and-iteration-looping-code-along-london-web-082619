// Code your solutions in this file

function writeCards(names, giftType) {
    var thankyous = []
    for (let i = 0; i < names.length; i++) {
        thankyous.push(`Thank you, ${names[i]}, for the wonderful ${giftType} gift!`)
    }
    return thankyous;
}

function countdown(number) {
    for (let i = 0; i <= number; i++ ){
        console.log(number - i);
    }
}
