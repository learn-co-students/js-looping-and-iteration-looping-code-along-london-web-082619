// Code your solutions in this file



function writeCards(cards, theme) {
    let array = []
    for (let i = 0; i < cards.length; i++) {
        array.push(`Thank you, ${cards[i]}, for the wonderful ${theme} gift!`);
    }
    return array;
}

function countdown(num) {
    while (num > -1) {
        console.log(num)
        num--
    }
}