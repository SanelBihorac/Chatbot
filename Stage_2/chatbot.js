// prompt-sync je javno dostupan npm paket koji radi lokalno i omogućava sinkroni unos, slično kao sync-input
const prompt = require('prompt-sync')();

console.log("Hello! My name is Aid.");
console.log("I was created in 2025.");
let name = prompt("What is your name? ")
console.log(`What a great name you have, ${name}!`)
console.log("What a great name you have, " + name + "!")


