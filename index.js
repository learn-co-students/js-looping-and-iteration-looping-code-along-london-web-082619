function writeCards(names, event) {
  let cards = [];
  for (let i=0; i < names.length; i++) {
    cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return cards;
}

function countdown(starting_number) {
  while (starting_number >= 0) {
    console.log(starting_number);
    starting_number--;
  }
}