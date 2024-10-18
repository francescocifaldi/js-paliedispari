let choice = prompt('pari o dispari?');
let userNum = parseInt(prompt('un numero da 1 a 5'));

const max = 5;
let cpuNum = randomIntFrom1to(max);
let sum = userNum + cpuNum;
console.log("somma = ", sum)


if ((choice == 'pari' && sum % 2 == 0)||(choice == 'dispari' && sum % 2 != 0)){
    console.log("hai vinto! avevi giocato:", choice)
} else {
    console.log("hai perso! avevi giocato:", choice)
}

function randomIntFrom1to(number){
    let randomInt = Math.floor(Math.random() * max) +1;
    console.log("numero tirato = ", randomInt)
    return randomInt;
}