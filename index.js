// Code your solutions in this file
const gifts = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, event){
let message = [];
for (let i = 0; i < names.length; i++) {
    message.push("Thank you, " + names [i] + ", for the wonderful " + event + " gift!")
}
return message;
}

function countDown(num) {
    let numbers = num;
    while (numbers >= 0) {
        console.log(numbers);
        numbers--;
    }
}

// My programmer friend is a jerk.
const obfCountdown = n => {
    while (n > (console.log(n--) || 0));
};