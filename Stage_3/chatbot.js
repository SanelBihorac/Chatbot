//prompt-sync je javno dostupan npm paket koji radi lokalno i omogućava sinkroni unos, slično kao sync-input
const prompt = require('prompt-sync')();

console.log("Hello! My name is Aid.");
console.log("I was created in 2025.");

let name = prompt("What is your name? ");

console.log(`What a great name you have, ${name}!`);
console.log("What a great name you have, " + name + "!");
console.log("Let me guess your age.");
console.log("Enter remainders of dividing your age by 3, 5 and 7.")

// taking the remainders:

let rem3 = prompt();
let rem5 = prompt();
let rem7 = prompt();

//calculating age
let age = (rem3 * 70 + rem5 * 21 + rem7 * 15) % 105;

//printing age:
console.log(`Your age is ${age}; that's a good time to start programming!`);
console.log("Your age is " + age + "; that's a good time to start programming!");