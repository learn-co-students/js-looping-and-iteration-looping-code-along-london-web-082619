// Code your solutions in this file

function writeCards(cards, surprise) {
    let greetings = [];
    for (let i = 0; i < cards.length; i++) {
      greetings.push (`Thank you, ${cards[i]}, for the wonderful ${surprise} gift!`)
    };
  
    return greetings;
  };
  
  function countdown(num) {
    while (num >= 0) {
      console.log(num);
      num --;
    }
  }  

 const countdown2 = (num) => {
  while (num >= 0) {
    console.log(num);
    num --;
  }
 }

 const timerWithSetInterval = () =>{
   let timer;
   let count =0;

   const increment = () => {

     count++;
     
     if (count >= 5 && timer != null) {
       clearInterval(timer)
     }
     console.log(count)
   }

    timer = setInterval(increment, 1000)

 }



 const alertEvent = () => {
   console.log(i)
   if(i >= 5) clearInterval(id);
   i++
 }

 let time = 1000;
 let i = 1;
 
 let id = setInterval(alertEvent, time)