// Code your solutions in this file
const gifts = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, event){
let message = [];
for (let i = 0; i < names.length; i++) {
    message.push("Thank you, " + names [i] + ", for the wonderful " + event + " gift!")
}
return message;
}

//const numbers = 10
function countDown(num) {
    let numbers = 0;
    while (numbers > 0 || === 0) {
        console.log(numbers);
        numbers--;
    }
}
countDown(10);
