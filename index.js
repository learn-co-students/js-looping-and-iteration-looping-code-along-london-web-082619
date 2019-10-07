// Code your solutions in this file

function writeCards(cards, surprise) {
    let greetings = [];
    for (let i = 0; i < cards.length; i++) {
      greetings.push (`Thank you, ${cards[i]}, for the wonderful ${surprise} gift!`);
    }
  
    return greetings;
  }
  
  function countdown(num) {
    while (num >= 0) {
      console.log(num);
      num --;
    }
  }  