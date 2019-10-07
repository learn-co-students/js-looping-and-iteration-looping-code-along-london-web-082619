// Code your solutions in this file

function writeCards(cards) {
    const greetings = [];
    for (let i = 0; i < cards.length; i++) {
      let greeting = `Thank you, ${cards[i]}, for the wonderful surprise gift!`;
      greetings.push(greeting);
    }
  
    return greetings;
  }
  
  function countdown(num) {
    while (num >= 0) {
      console.log(num);
      num --;
    }
  }  