//////// Primo esercizio ///////////

// - crea un array di mail
const arrayEmails = [
'frodobaggins@gmail.com',
'bilbobaggins@gmail.com',
'pipinotuc@gmail.com',
'merrybrandibuck@gmail.com',
'legolasverdefoglia@gmail.com',
'aragornelessar@gmail.com'
]

const usersNumber = arrayEmails.length; 

// - chiedi all'utente la mail
let askMail = prompt('Scrivi qui la tua mail');

// - PER OGNI mail nell'array, fai un confronto con la mail dell'utente

let currentMail
let message = 'accesso negato'

for (let i = 0 ; i < usersNumber; i ++) {
    const currentNumber = i; 
    currentMail = arrayEmails[i]; 

    if (currentMail == askMail) {
        message = 'accesso riuscito'
}

}

console.log(message)
alert(message)

//////FINE PRIMO ESERCIZIO//////

/////////INIZIO SECONDO ESERCIZIO//////////

// - genera un numero da 1 a 6 per il giocatore
btnDOMElement = document.getElementById('button');
btnDOMElement.addEventListener('click', function () {
const userNumber = Math.floor(Math.random() * (6 - 1) + 1);
console.log(userNumber)
// - genera un numero da 1 a 6 per il computer 
const pcNumber = Math.floor(Math.random() * (6 - 1) + 1); 
console.log(pcNumber)
// - confronta i due numeri 
// - se a > b allora a ha vinto 
if (userNumber > pcNumber) {
alert('hai vinto')
} // - altrimenti sono pari 
else if (userNumber === pcNumber) {
alert('Siete pari')
} // - altrimenti a ha perso 
else {
alert('hai perso')
}

})
