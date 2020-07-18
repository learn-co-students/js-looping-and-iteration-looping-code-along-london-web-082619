// Code your solutions in this file

const birthdayNames = [ 'Lisa', 'Kaitlin', 'Jan' ]
const birthday = "surprise"
function writeCards(birthdayNames, birthday)   {
    let thankYouCard = []
    for ( let i = 0; i < birthdayNames.length ; i++ ) {
        thankYouCard.push(`Thank you, ${birthdayNames[i]}, for the wonderful ${birthday} gift!`)
    }
    return thankYouCard
}


function countdown() {
    let countdown = 10
    while ( 0 < countdown) {
        console.log(countdown)
        countdown = countdown - 1
    }
    console.log(countdown)
}
