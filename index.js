// const gifts = ["teddy bear", "drone", "doll"];
 
// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }
 
//   return gifts;
// }
 
// wrapGifts(gifts);

function writeCards(array, event) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
    newArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
}
return newArray
}


const gifts = ["teddy bear", "drone", "doll"];
 
function wrapGifts(gifts) {
  let i = 0; // the initialization moved OUTSIDE the body of the loop!
  while (i < gifts.length) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++; // the iteration moves INSIDE the body of the loop!
  }
 
  return gifts;
}
 
wrapGifts(gifts);

function countdown(integer) {
    
    while (integer > -1) {
        console.log(integer)
        integer -= 1 

    }
return integer

}

